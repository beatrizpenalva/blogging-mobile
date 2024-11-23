import { StyleSheet, Text, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';

import { useController } from "react-hook-form"

type DropdownOption = {
    label: string;
    value: string | number | boolean;
}

type FormDropdownProps = {
    fieldName: string;
    label: string;
    options: Array<DropdownOption>;
}

export const FormDropdown = ({ fieldName, label: inputLabel, options }: FormDropdownProps) => {
    const {
        field: { onChange, value },
        fieldState: { error }
    } = useController({ name: fieldName })

    const hasError = Boolean(Object.keys(error ?? {}).length)

    return (
        <View>
            <Text>{inputLabel}</Text>
            <RNPickerSelect
                onValueChange={onChange}
                items={options}
                value={value}
            />
            {hasError && <Text style={styles.error}>{error?.message}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "#ab1616",
        fontSize: 12,
        fontWeight: 500,
    },
})