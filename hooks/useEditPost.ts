import type { PostPayload } from "../api"
import type { TimelineScreenNavigationProp } from "../model/Routes"

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { putPost } from "../api"
import { useErrorHandler } from "./useErrorHandler"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useEditPost = (id: string | number) => {
    const [loading, setLoading] = useState(false)

    const { errorHandler } = useErrorHandler()
    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { token } = usePermission()
    const { setSnackbar } = useSnackbar()

    const editPost = async (data: PostPayload) => {
        setLoading(true)
        try {
            await putPost(id, token, data)

            setSnackbar({
                message: "Publicação alterada com sucesso.",
                variant: "success"
            })

            navigate("app/screens/Timeline/index")
        } catch (e: unknown) {
            errorHandler(e, "Não foi possível salvar a edição. Por favor, tente novamente mais tarde.")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        editPost,
    }
}