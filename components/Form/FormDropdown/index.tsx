import { StyleSheet, Text, View } from "react-native"
import RNPickerSelect from "react-native-picker-select"

import { useController } from "react-hook-form"

type DropdownOption = {
    label: string
    value: string | number
}

type FormDropdownProps = {
    fieldName: string
    label: string
    options: Array<DropdownOption>
}

export const FormDropdown = ({ fieldName, label: inputLabel, options }: FormDropdownProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName })

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>{inputLabel}</Text>
            <RNPickerSelect
                items={options}
                onValueChange={onChange}
                style={{
                    inputWeb: styles.input,
                    inputAndroid: styles.input,
                    inputIOS: styles.input
                }}
                value={value}
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
    },
    inputLabel: {
        color: "#276cb1",
        fontWeight: "bold",
    },
    inputWrapper: {
        width: "100%",
        display: "flex",
        gap: 8,
    },
    error: {
        color: "#ab1616",
        fontSize: 12,
        fontWeight: 500,
    },
})