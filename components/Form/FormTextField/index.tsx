import { StyleSheet, Text, TextInput, View, type InputModeOptions } from "react-native";

import { useController } from "react-hook-form"

type FormTextFieldProps = {
    fieldName: string;
    inputMode?: InputModeOptions;
    hideValue?: boolean;
    label: string;
    multiline?: boolean;
    placeholder?: string;
    srLabel?: string;
}

export const FormTextField = ({ fieldName, hideValue = false, inputMode = "text", label, multiline = false, placeholder = "", srLabel }: FormTextFieldProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName })

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                inputMode={inputMode}
                multiline={multiline}
                onChangeText={onChange}
                placeholder={placeholder}
                secureTextEntry={hideValue}
                style={styles.input}
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
        borderColor: "#276cb1",
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        width: "100%",
    },
    error: {
        color: "#ab1616",
        fontSize: 12,
        fontWeight: 500,
    },
})