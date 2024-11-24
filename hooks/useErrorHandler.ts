import type { ApiResponseDataUnknown } from "../api"

import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useErrorHandler = () => {
    const { setToken } = usePermission()
    const { setSnackbar } = useSnackbar()

    const errorHandler = (e: any, message: string) => {
        const { statusCode } = e?.response?.data as ApiResponseDataUnknown

        if (statusCode == 401) {
            setToken("")

            setSnackbar({
                message: "Permissão expirada. Por favor, faça o login novamente.",
                show: true,
                variant: "error"
            })

            // TODO: Redirecionar para a tela de Login

            return
        } else {
            setSnackbar({
                message,
                show: true,
                variant: "error"
            })
        }
    }

    return {
        errorHandler,
    }
}