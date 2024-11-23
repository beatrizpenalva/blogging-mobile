import type { CreateUserPayload } from "../api"

import { useState } from "react"

import { postUser } from "../api"
import { usePermission } from "./usePermission"
import { useSnackbar } from "./useSnackbar"

export const useRegister = () => {
    const [loading, setLoading] = useState(false)

    const { token } = usePermission()
    const { setSnackbar } = useSnackbar()

    const handleRegister = async (data: CreateUserPayload, onSuccess: () => void) => {
        if (!token) {
            setSnackbar({
                show: true,
                message: "Você não tem autorização para realizar essa ação.",
                variant: "error"
            })
        } else {
            setLoading(true)
            try {

                await postUser(data)

                onSuccess()

                setSnackbar({
                    show: true,
                    message: "Usuário criado com sucesso.",
                    variant: "success"
                })
            } catch (e: unknown) {
                setSnackbar({
                    show: true,
                    message: "Ocorreu um erro. Por favor, tente novamente mais tarde.",
                    variant: "error"
                })
            } finally {
                setLoading(false)
            }
        }
    }

    return {
        loading,
        onRegister: handleRegister,
    }
}