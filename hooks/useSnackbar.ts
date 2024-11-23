import { useContext } from "react"

import { SnackbarContext } from "../context/snackbar"

export const useSnackbar = () => {
    const { snackbar, setSnackbar } = useContext(SnackbarContext)

    return {
        snackbar,
        setSnackbar,
    }
}