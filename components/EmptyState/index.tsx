import { StyleSheet, Text, View } from "react-native"

import Ionicons from "react-native-vector-icons/Ionicons"

import { Colors } from "../../model/Colors"

type EmptyStateProps = {
    description: string
    title?: string
}

export const EmptyState = ({ description, title }: EmptyStateProps) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" color={Colors.secondary} size={32} />
            <Text style={styles.title}>{title || "Nenhuma publicação para exibir"}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

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
