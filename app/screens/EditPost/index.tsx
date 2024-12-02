import type { RouteProp } from "@react-navigation/native"
import type { TimelineScreenNavigationProp } from "../../../model/Routes"

import { useEffect, useMemo } from "react"
import { StyleSheet, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { RootStackParamList } from "../../../model/Routes"

import { Button } from "../../../components/Button"
import { ErrorState } from "../../../components/ErrorState"
import { Form } from "../../../components/Form"
import { FormTextField } from "../../../components/Form/FormTextField"
import { PageLayout } from "../../../templates/PageLayout"
import { Skeleton } from "../../../components/Skeleton"
import { useEditPost } from "../../../hooks/useEditPost"
import { usePostDetails } from "../../../hooks/usePostDetails"
import { Colors } from "../../../model/Colors"

import { EditPostFormFields, EditPostFormValues, EditPostSchema } from "./EditPostSchema"

type EditPostProps = {
    route: RouteProp<RootStackParamList, "app/screens/EditPost/index">
}

const EditPost: React.FC<EditPostProps> = ({ route }) => {
    const { id } = route.params;

    const {
        getPostDetails,
        post,
        requestStatus
    } = usePostDetails(id);

    const defaultValues = useMemo(() => ({
        content: post?.content,
        title: post?.title
    }), [post]);


    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { loading, editPost } = useEditPost(id)
    const methods = useForm<EditPostFormValues>({
        defaultValues,
        resolver: yupResolver(EditPostSchema)
    });

    const { handleSubmit, reset } = methods;
    const isLoading = requestStatus === "loading"

    useEffect(() => {
        // This is necessary so default values is set on form fields
        reset(defaultValues);
    }, [post]);

    useEffect(() => {
        void getPostDetails();
    }, [id]);

    if (requestStatus === "error") {
        return (
            <ErrorState onTryAgain={getPostDetails} />
        )
    }

    return (
        <PageLayout>
            <View style={styles.container}>
                <Form methods={methods}>
                    {isLoading ?
                        <View style={styles.formSkeletonContainer}>
                            <Skeleton height={12} width={144} />
                            <Skeleton height={48} width={320} />
                        </View>
                        :
                        <FormTextField
                            fieldName={EditPostFormFields.title}
                            label="Título"
                            multiline
                        />
                    }
                    {isLoading ?
                        <View style={styles.formSkeletonContainer}>
                            <Skeleton height={12} width={144} />
                            <Skeleton height={96} width={320} />
                        </View>
                        :
                        <FormTextField
                            fieldName={EditPostFormFields.content}
                            label="Conteúdo"
                            multiline
                            style={styles.inputCustomClass}
                        />
                    }
                    {isLoading ?
                        <View style={styles.formSkeletonContainer}>
                            <Skeleton height={12} width={144} />
                            <Skeleton height={96} width={320} />
                        </View>
                        :
                        <FormTextField
                            fieldName={EditPostFormFields.author}
                            label="Autor"
                            multiline
                        />
                    }
                    <View style={styles.actionsContainer}>
                        {isLoading ? <Skeleton height={48} width={48} /> : <Button label="Salvar" loading={loading} onPress={handleSubmit(editPost)} />}
                        {isLoading ? <Skeleton height={48} width={48} /> : <Button label="Cancelar" onPress={() => navigate("app/screens/Timeline/index")} variant="secondary" />}
                    </View>
                </Form>
            </View>
        </PageLayout>
    )
}

export default EditPost

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
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingVertical: 32,
        gap: 32
    },
    formSkeletonContainer: {
        gap: 8,
    },
    inputCustomClass: {
        height: 200
    }
})