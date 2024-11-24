import type { TimelineScreenNavigationProp } from "../app/routes/types"

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { postPost, type PostPayload } from "../api"
import { useErrorHandler } from "./useErrorHandler"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false)

    const { errorHandler } = useErrorHandler()
    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { token } = usePermission()
    const { setSnackbar } = useSnackbar()

    const savePost = async ({ content, title }: PostPayload): Promise<any> => {
        setLoading(true)
        try {
            await postPost(token, { content, title })

            setSnackbar({
                show: true,
                message: "Publicação criada com sucesso.",
                variant: "success"
            })

            navigate("app/screens/Timeline/index")
        } catch (e: unknown) {
            errorHandler(e, "Não foi possível salvar a publicação. Por favor, tente novamente mais tarde.")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        savePost,
    }
}