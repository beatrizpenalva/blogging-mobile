import type { ApiResponseDataUnknown } from "../api"
import type { LoginScreenNavigationProp } from "../app/routes/types"

import { useNavigation } from "@react-navigation/native"

import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useErrorHandler = () => {
    const { navigate } = useNavigation<LoginScreenNavigationProp>()
    const { setToken } = usePermission()
    const { setSnackbar } = useSnackbar()

    const errorHandler = (e: any, message: string) => {
        const { statusCode } = e?.response?.data as ApiResponseDataUnknown

        if (statusCode == 401) {
            setToken("")

            setSnackbar({
                message: "Permissão expirada. Por favor, faça o login novamente.",
                variant: "error"
            })

            navigate("app/screens/Timeline/index")
        } else {
            setSnackbar({
                message,
                variant: "error"
            })
        }
    }

    return {
        errorHandler,
    }
}