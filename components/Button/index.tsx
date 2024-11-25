import { Pressable, StyleSheet, Text, type PressableProps } from "react-native"

import { Colors } from "../../model/enums"

enum VariantButtonClassNames {
    primary = "btn-primary",
    secondary = "btn-secondary",
    danger = "btn-danger",
}

enum VariantLabelClassNames {
    primary = "btn-primary-label",
    secondary = "btn-secondary-label",
    danger = "btn-danger-label",
}

type ButtonProps = {
    buttonProps?: object
    disabled?: boolean
    fullWidth?: boolean
    label: string
    loading?: boolean
    onPress: PressableProps["onPress"]
    srLabel?: string
    variant?: "primary" | "secondary" | "danger"
}

export const Button = ({
    buttonProps,
    disabled = false,
    fullWidth = false,
    label,
    loading = false,
    onPress,
    srLabel,
    variant = "primary",
}: ButtonProps) => {
    const backgroundStyle = VariantButtonClassNames[variant]
    const textStyle = VariantLabelClassNames[variant]

    return (
        <Pressable
            accessibilityLabel={srLabel || label}
            disabled={disabled}
            onPress={onPress}
            style={[styles.btn, styles[backgroundStyle], fullWidth ? styles["btn-fullWidht"] : "", loading ? styles["btn-loading"] : ""]}
            {...buttonProps}
        >
            <Text style={[styles.label, styles[textStyle]]}>{loading ? "Carregando..." : label}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 48
    },
    "btn-danger": {
        backgroundColor: Colors.negative,
    },
    "btn-danger-label": {
        color: Colors.white,
    },
    "btn-fullWidht": {
        width: "100%"
    },
    "btn-loading": {
        backgroundColor: Colors.secondary,
    },
    "btn-primary": {
        backgroundColor: Colors.primary,
    },
    "btn-primary-label": {
        color: Colors.white,
    },
    "btn-secondary": {
        backgroundColor: Colors.white,
        borderColor: Colors.primary,
        borderStyle: "solid",
        borderWidth: 1,
    },
    "btn-secondary-label": {
        color: Colors.primary,
    },
    label: {
        fontSize: 14,
        fontWeight: 600
    },
})
