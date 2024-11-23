import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

type PostResponse = {
    content: string;
    id: string | number;
    title: string;
}

type CardPostProps = {
    post: PostResponse;
}

export const CardPost = ({ post }: CardPostProps) => {
    const { content, id, title } = post

    const handleSeePostDetails = () => {
        console.log(`Ver detalhe da postagem ${id}`)
    }

    return (
        <TouchableOpacity onPress={handleSeePostDetails}>
            <View style={styles.container}>
                <Text>{title}</Text>
                <Text>{content}</Text>
            </View>
        </TouchableOpacity >
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