import type { RouteProp } from "@react-navigation/native"

import { useEffect } from "react"
import { StyleSheet, Text, View } from "react-native"

import { Button } from "../../../components/Button"
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

const LoadingState = () => (
    <View style={styles.container}>
        <Skeleton height={96} width={320} />
        <Skeleton height={96} width={320} />
        <Skeleton height={96} width={320} />
    </View>
)

const PostDetails: React.FC<PostDetailsProps> = ({ route }) => {
    const { id } = route.params;

    const { hasPermission } = usePermission()
    const { getPostDetails, post, requestStatus } = usePostDetails(id)

    const showActionButtons = hasPermission && Boolean(Object.keys(post ?? {}).length)

    useEffect(() => {
        void getPostDetails()
    }, [id])

    if (requestStatus === "loading") {
        return (
            <LoadingState />
        )
    }

    if (requestStatus === "error") {
        return (
            <ErrorState onTryAgain={getPostDetails} />
        )
    }

    return (
        <PageLayout>
            <View style={styles.container}>
                <View>
                    <View>
                        <Text>{post?.title}</Text>
                        <View>
                            <Text>
                                Data da publicação: {dateHandler(post?.createdAt).format('DD/MM/YYYY')}
                            </Text>
                            <Text>
                                Última edição: {dateHandler(post?.updatedAt ?? post?.createdAt).format('DD/MM/YYYY')}
                            </Text>
                        </View>
                    </View>
                </View>
                <Text>{post?.content}</Text>
                {showActionButtons && (
                    <View>
                        <Button label="Editar" onPress={() => console.log('Navegar')} variant="primary" />
                        <Button label="Excluir" onPress={() => console.log('Disparar um alert')} variant="danger" />
                    </View>
                )}
            </View>
        </PageLayout >
    )
}

export default PostDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingHorizontal: 24,
        paddingVertical: 32,
        marginBottom: 62,
    }
})