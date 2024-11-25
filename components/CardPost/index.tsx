import type { PostResponse } from "../../api"

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"

import { Colors } from "../../model/enums"

type CardPostProps = {
    post: PostResponse
}

export const CardPost = ({ post }: CardPostProps) => {
    const { content, id, title } = post

    const handleSeePostDetails = () => {
        console.log(`Ver detalhe da postagem ${id}`)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            <TouchableOpacity onPress={handleSeePostDetails}>
                <Text style={styles.button}>
                    Ler mais <Ionicons name="arrow-forward" color={Colors.primary} size={12} />
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        color: Colors.primary,
        fontWeight: "bold"
    },
    container: {
        backgroundColor: Colors.white,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
        padding: 16,
        width: "100%",
        borderRadius: 8,
        borderStyle: "solid",
        borderWidth: 0.05,
        borderColor: Colors.lightGray,
        gap: 12
    },
    content: {
        fontSize: 16,
    },
    title: {
        fontWeight: "bold",
    },
})