import type { ApiResponseDataUnknown } from "../api"
import type { LoginScreenNavigationProp } from "../model/Routes"

import { useNavigation } from "@react-navigation/native"

import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useErrorHandler = () => {
    const { navigate } = useNavigation<LoginScreenNavigationProp>()
    const { setUserInfo } = usePermission()
    const { setSnackbar } = useSnackbar()

    const errorHandler = (e: any, message: string) => {
        const { statusCode } = e?.response?.data as ApiResponseDataUnknown

        if (statusCode == 401) {
            setUserInfo({ token: "", user: "" })

            setSnackbar({
                message: "Permissão expirada. Por favor, faça o login novamente.",
                variant: "error"
            })

            navigate("app/screens/Login/index")
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