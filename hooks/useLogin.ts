import type { TimelineScreenNavigationProp } from "../model/Routes"

import { useState } from "react"
import { useNavigation } from "@react-navigation/native"

import { postLogin, type UserPayload } from "../api"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)

    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { setUserInfo } = usePermission()
    const { setSnackbar } = useSnackbar()

    const loginUser = async ({ username, password }: UserPayload) => {
        setLoading(true)
        try {
            const { token } = await postLogin({ username, password })
            setUserInfo({ token, user: username })

            navigate("app/screens/Timeline/index")
        } catch {
            setSnackbar({
                message: "Não foi possível fazer login. Por favor, tente novamente mais tarde.",
                variant: "error"
            })
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        loginUser,
    }
}