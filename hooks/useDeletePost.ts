import type { TimelineScreenNavigationProp } from "../model/Routes"

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { deletePost as deletePostService } from "../api"
import { useErrorHandler } from "./useErrorHandler"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

type UseDeleteParams = {
    id: string | number
    onToggleModal: () => void
}

export const useDeletePost = ({ id, onToggleModal }: UseDeleteParams) => {
    const [loading, setLoading] = useState(false)

    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { errorHandler } = useErrorHandler()
    const { token } = usePermission()
    const { setSnackbar } = useSnackbar()

    const deletePost = async () => {
        setLoading(true)
        try {
            await deletePostService(id, token)

            setSnackbar({
                message: "Publicação excluída com sucesso.",
                variant: "success",
            })

            navigate("app/screens/Timeline/index")
        } catch (e: unknown) {
            onToggleModal()
            errorHandler(e, "Não foi possível excluir a publicação. Por favor, tente novamente mais tarde.")
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        deletePost,
    }
}