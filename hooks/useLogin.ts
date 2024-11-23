import type { UserPayload } from "../api"

import { useState } from "react"

import { postLogin } from "../api"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useLogin = () => {
    const [loading, setLoading] = useState(false)

    const { setToken } = usePermission()
    const { setSnackbar } = useSnackbar()

    const loginUser = async ({ username, password }: UserPayload) => {
        setLoading(true)
        try {
            const { token } = await postLogin({ username, password })
            setToken(token)

            // TODO: Redirecionar para a timeline
        } catch {
            setSnackbar({
                show: true,
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