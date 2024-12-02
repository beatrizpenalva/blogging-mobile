import { StyleSheet, Text, View } from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons"

import { PageLayout } from "../../templates/PageLayout"
import { Colors } from "../../model/Colors"

export const ErrorBoundaryFallback = () => (
    <PageLayout>
        <View style={styles.container}>
            <Ionicons name="warning" color={Colors.warning} size={32} />
            <Text style={styles.title}>Ops, ocorreu um problema!</Text>
            <Text style={styles.description}>Tente sair e entrar novamente.</Text>
        </View>
    </PageLayout>
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