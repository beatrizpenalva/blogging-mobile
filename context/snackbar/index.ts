import type { SnackbarProps } from "../../components/Snackbar"

import { createContext } from "react"

export const DEFAULT_SNACKBAR_STATE: SnackbarProps = {
    message: "",
    show: false,
    variant: "success",
}

export type SnackbarContextValue = {
    snackbar: SnackbarProps;
    setSnackbar: (snackbar: SnackbarProps) => void;
}

export const SnackbarContext = createContext({
    snackbar: DEFAULT_SNACKBAR_STATE,
    setSnackbar: (snackbar: SnackbarProps) => {
        if (!snackbar) {
            throw new Error("Misuse when calling snackbar.")
        }
    },
})