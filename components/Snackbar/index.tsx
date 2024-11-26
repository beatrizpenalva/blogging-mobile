import { useEffect, useState } from "react"
import { Snackbar as RNPSnackbar } from "react-native-paper"

import { Colors } from "../../model/Colors"

export type SnackbarProps = {
    message: string
    show: boolean
    variant: "error" | "success"
}

export const Snackbar = ({ message, show = false, variant = "success" }: SnackbarProps) => {
    const [visible, setVisible] = useState(show)

    const color = variant === "success" ? Colors.positive : Colors.negative

    const hideSnackbar = () => setVisible(false)

    useEffect(() => {
        setVisible(show)
    }, [show])

    return (
        <RNPSnackbar
            onDismiss={hideSnackbar}
            visible={visible}
            style={{ backgroundColor: color }}
        >
            {message}
        </RNPSnackbar>
    )
}
