import type { PostResponse } from "../../../api"

import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"

import { FormSearch } from "../../../components/Form/FormSearch"
import { SearchFormValues } from "../../../components/Form/FormSearch/SearchSchema"
import { TimelineContent } from "../../../components/TimelineContent"
import { PageLayout } from "../../../templates/PageLayout"
import { Colors } from "../../../model/enums"

import { useListPosts } from "../../../hooks/useListPosts"
import { useSearchPost } from "../../../hooks/useSearchPost"

const Timeline = () => {
    const [currentList, setCurrentList] = useState<Array<PostResponse>>([])

    const { getListPosts, postsList, requestStatus } = useListPosts()
    const { loading, searchPost, posts } = useSearchPost()

    const hasError = requestStatus === "error"
    const isLoading = requestStatus === "loading" || loading

    const handleSearch = async (data: SearchFormValues) => {
        await searchPost(data.word)
    }

    useEffect(() => {
        setCurrentList(posts)
    }, [posts])

    useEffect(() => {
        setCurrentList(postsList)
    }, [postsList])

    useEffect(() => {
        void getListPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <PageLayout>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <FormSearch onSearch={handleSearch} />
                </View>
                <TimelineContent error={hasError} loading={isLoading} onTryAgain={() => void getListPosts()} posts={currentList} />
            </View>
        </PageLayout>
    )
}

export default Timeline

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
        paddingVertical: 32,
        marginBottom: 62,
    },
    searchContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: 24,
    }
})