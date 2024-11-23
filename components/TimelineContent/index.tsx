import { StyleSheet, View } from "react-native"

import { CardPost } from "../CardPost"
import { EmptyState } from "..//EmptyState"
import { ErrorState } from "../ErrorState"
import { Skeleton } from "../Skeleton"

type PostResponse = {
    content: string;
    id: string | number;
    title: string;
}

type TimelineContentProps = {
    error?: boolean;
    loading?: boolean;
    onTryAgain: () => void;
    posts: Array<PostResponse>
}

const LoadingState = () => (
    <View style={styles.container}>
        <Skeleton />
        <Skeleton />
        <Skeleton />
    </View>
)

export const TimelineContent = ({ error = false, loading = false, onTryAgain, posts }: TimelineContentProps) => {
    if (loading) {
        return (
            <LoadingState />
        )
    }

    if (error) {
        return (
            <ErrorState onTryAgain={onTryAgain} />
        )
    }

    if (!posts.length) {
        return (
            <EmptyState description="Que tal criar uma publicação com o tema que estava buscando?" />
        )
    }

    return (
        <View style={styles.container}>
            {posts.map((item) => <CardPost key={item.id} post={item} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems: 'center',
        justifyContent: 'center'
    }
})