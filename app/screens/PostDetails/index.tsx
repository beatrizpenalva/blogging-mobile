import type { RouteProp } from "@react-navigation/native"
import type { EditPostScreenNavigationProp } from "../../../model/Routes"

import { useEffect, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { Button } from "../../../components/Button"
import { DeleteConfirmationModal } from "../../../components/DeleteConfirmationModal"
import { ErrorState } from "../../../components/ErrorState"
import { PageLayout } from "../../../templates/PageLayout"
import { Skeleton } from "../../../components/Skeleton"

import { usePermission } from "../../../hooks/usePermission"
import { usePostDetails } from "../../../hooks/usePostDetails"
import { dateHandler } from "../../../utils/dateHandler"
import { RootStackParamList } from "../../../model/Routes"

type PostDetailsProps = {
    route: RouteProp<RootStackParamList, "app/screens/PostDetails/index">
}

const PostDetails: React.FC<PostDetailsProps> = ({ route }) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const { id } = route.params;

    const { navigate } = useNavigation<EditPostScreenNavigationProp>()
    const { hasPermission } = usePermission()
    const { getPostDetails, post, requestStatus } = usePostDetails(id)

    const isLoading = requestStatus === "loading"

    const lastEditionDate = dateHandler(post?.updatedAt ?? post?.createdAt)
    const publishDate = dateHandler(post?.createdAt).format('DD/MM/YYYY')

    const handleEditPostDetails = () => {
        navigate("app/screens/EditPost/index", { id })
    }

    useEffect(() => {
        void getPostDetails()
    }, [id])

    if (requestStatus === "error") {
        return (
            <ErrorState onTryAgain={getPostDetails} />
        )
    }

    return (
        <PageLayout>
            <DeleteConfirmationModal id={id} onClose={() => setOpenDeleteModal(false)} open={openDeleteModal} />
            <View style={styles.container}>
                <ScrollView>
                    {isLoading ? <Skeleton height={16} width={320} /> : <Text style={styles.title}>{post?.title}</Text>}
                    <View style={styles.detailsContainer}>
                        {isLoading ? <Skeleton height={8} width={144} /> : <Text style={styles.details}>{`Data da publicação: ${publishDate}`}</Text>}
                        {isLoading ? <Skeleton height={8} width={144} /> : <Text style={styles.details}>{`Última edição: ${lastEditionDate}`}</Text>}
                    </View>
                    {isLoading ? <Skeleton height={160} width={320} /> : <Text style={styles.content}>{post?.content}</Text>}
                </ScrollView>
                {hasPermission && (
                    <View style={styles.actionsContainer}>
                        {isLoading ? <Skeleton height={48} width={48} /> : <Button label="Excluir" onPress={() => setOpenDeleteModal(true)} variant="danger" />}
                        {isLoading ? <Skeleton height={48} width={48} /> : <Button label="Editar" onPress={handleEditPostDetails} variant="primary" />}
                    </View>
                )}
            </View>
        </PageLayout >
    )
}

export default PostDetails

const styles = StyleSheet.create({
    actionsContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        gap: 12,
        marginTop: 12,
    },
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
        paddingVertical: 32,
        marginBottom: 62,
    },
    content: {
        fontSize: 16,
        fontWeight: 400,
    },
    details: {
        fontSize: 12,
    },
    detailsContainer: {
        marginTop: 12,
        marginBottom: 24,
        display: "flex",
        flexDirection: "column",
        gap: 4,
    },
    title: {
        fontSize: 14,
        fontWeight: 600,
    }
})