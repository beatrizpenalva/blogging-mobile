import { StyleSheet, Text, View } from "react-native"

import { Button } from "../Button"

type ErrorStateProps = {
    onTryAgain: () => void
}

export const ErrorState = ({ onTryAgain }: ErrorStateProps) => (
    <View style={styles.container}>
        <Text>Ocorreu um erro</Text>
        <Text>Não conseguimos efetuar a busca. Por favor, tente novamente.</Text>
        <Button onPress={onTryAgain} label="Tentar novamente" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#276cb1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        width: "100%"
    }
})