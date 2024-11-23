import { StyleSheet, Text, View } from "react-native"

type EmptyStateProps = {
    description: string;
    title?: string;
};

export const EmptyState = ({ description, title }: EmptyStateProps) => {
    return (
        <View style={styles.container}>
            <Text>{title || "Nenhuma publicação para exibir"}</Text>
            <Text>{description}</Text>
        </View>
    )
}

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
