import { StyleSheet, Text, View } from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons"

import { Button } from "../Button"
import { Colors } from "../../model/Colors"

type ErrorStateProps = {
    onTryAgain: () => void
}

export const ErrorState = ({ onTryAgain }: ErrorStateProps) => (
    <View style={styles.container}>
        <Ionicons name="close" color={Colors.negative} size={32} />
        <Text style={styles.title}>Ocorreu um erro</Text>
        <Text style={styles.description}>Não conseguimos efetuar a busca. Por favor, tente novamente.</Text>
        <Button onPress={onTryAgain} label="Tentar novamente" />
    </View>
)

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flex: 1
    },
    description: {
        textAlign: "center",
        fontSize: 16,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    }
})