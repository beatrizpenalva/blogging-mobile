import type { SnackbarProps } from "../components/Snackbar"

import { useContext, useEffect } from "react"

import { SnackbarContext } from "../context/snackbar"

type SnackbarHook = Omit<SnackbarProps, 'show'>

export const useSnackbar = () => {
    const { snackbar, setSnackbar } = useContext(SnackbarContext)

    useEffect(() => {
        return (() => {
            setTimeout(() => setSnackbar({ ...snackbar, show: false }), 2000)
        })
    }, [snackbar.show])

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