import type { SnackbarProps } from "../components/Snackbar"

import { useContext } from "react"

import { SnackbarContext } from "../context/snackbar"

type SnackbarHook = Omit<SnackbarProps, 'show'>

export const useSnackbar = () => {
    const { snackbar, setSnackbar } = useContext(SnackbarContext)

    return {
        snackbar,
        setSnackbar: (data: SnackbarHook) => {
            setSnackbar({
                ...data,
                show: true
            })
        },
    }
}