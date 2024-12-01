import { StyleSheet, Text, TextInput, View, type InputModeOptions } from "react-native"

import { useController } from "react-hook-form"

import { Colors } from "../../../model/Colors"

type FormTextFieldProps = {
    fieldName: string
    inputMode?: InputModeOptions
    hideValue?: boolean
    label?: string
    multiline?: boolean
    placeholder?: string
    srLabel?: string
    style?: object
}

export const FormTextField = ({ fieldName, hideValue = false, inputMode = "text", label, multiline = false, placeholder = "", srLabel, style }: FormTextFieldProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName })

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <View style={styles.inputWrapper}>
            {Boolean(label) ? <Text style={styles.inputLabel}>{label}</Text> : null}
            <TextInput
                inputMode={inputMode}
                multiline={multiline}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={hideValue}
                style={[styles.input, style]}
                value={value}
                accessibilityLabel={srLabel}
            />
            {hasError && <Text style={styles.error}>{error?.message}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 48,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
    },
    inputLabel: {
        color: Colors.primary,
        fontWeight: "bold",
    },
    inputWrapper: {
        width: "100%",
        display: "flex",
        gap: 8,
    },
    error: {
        color: Colors.negative,
        fontSize: 12,
        fontWeight: 500,
    },
})