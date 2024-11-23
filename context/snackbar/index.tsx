import type { SnackbarProps } from "../../components/Snackbar"

import { createContext, useMemo, useState, type PropsWithChildren } from "react"

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

type SnackbarProviderProps = PropsWithChildren

export const SnackbarProvider = ({ children }: SnackbarProviderProps) => {
    const [snackbar, setSnackbar] = useState<SnackbarProps>(DEFAULT_SNACKBAR_STATE)

    const memoizedSnackbar = useMemo(() => ({
        snackbar,
        setSnackbar,
    }), [snackbar, setSnackbar])

    return (
        <SnackbarContext.Provider value={memoizedSnackbar}>{children}</SnackbarContext.Provider>
    )
}