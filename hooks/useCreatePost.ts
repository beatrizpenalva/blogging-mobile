import type { TimelineScreenNavigationProp } from "../model/Routes"
import type { PostFormValues } from "../app/screens/CreatePost/PostSchema"

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { postPost } from "../api"
import { useErrorHandler } from "./useErrorHandler"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useCreatePost = () => {
    const [loading, setLoading] = useState(false)

    const { errorHandler } = useErrorHandler()
    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { token, user } = usePermission()
    const { setSnackbar } = useSnackbar()

    const savePost = async ({ content, title }: PostFormValues): Promise<any> => {
        setLoading(true)
        try {
            await postPost(token, { content, title, author: user })

            setSnackbar({
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