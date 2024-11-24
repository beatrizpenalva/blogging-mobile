import { Pressable, StyleSheet, Text, type PressableProps } from "react-native"

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
            style={[styles.btn, styles[backgroundStyle], fullWidth ? styles["btn-fullWidht"] : ""]}
            {...buttonProps}
        >
            <Text style={[styles.label, styles[textStyle]]}>{loading ? "Carregando" : label}</Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    btn: {
        borderRadius: 4,
        paddingHorizontal: 8,
        paddingVertical: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    "btn-danger": {
        backgroundColor: "#ab1616",
    },
    "btn-danger-label": {
        color: '#fafafa',
    },
    "btn-fullWidht": {
        width: "100%"
    },
    "btn-primary": {
        backgroundColor: "#276cb1",
    },
    "btn-primary-label": {
        color: "#fafafa",
    },
    "btn-secondary": {
        backgroundColor: "#fafafa",
        borderColor: "#276cb1",
        borderStyle: "solid",
        borderWidth: 1,
    },
    "btn-secondary-label": {
        color: "#276cb1",
    },
    label: {
        fontSize: 14,
        fontWeight: 600
    },
})
