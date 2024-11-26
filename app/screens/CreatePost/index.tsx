import type { TimelineScreenNavigationProp } from "../../../model/Routes"

import { StyleSheet, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../../components/Button"
import { Form } from "../../../components/Form"
import { FormTextField } from "../../../components/Form/FormTextField"
import { PageLayout } from "../../../templates/PageLayout"
import { useCreatePost } from "../../../hooks/useCreatePost"
import { Colors } from "../../../model/Colors"

import { PostFormFields, PostFormValues, PostSchema } from "./PostSchema"

const FORM_DEFAULT_VALUES = {
    title: "",
    description: "",
}

const CreatePost = () => {
    const { loading, savePost } = useCreatePost()
    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(PostSchema)
    })

    const { handleSubmit } = methods

    const handleSavePost = async (data: PostFormValues) => {
        await savePost(data)
    }

    return (
        <PageLayout>
            <View style={styles.container}>
                <Form methods={methods}>
                    <FormTextField
                        fieldName={PostFormFields.title}
                        label="Título"
                        multiline
                        placeholder="Digite o título da publicação"
                    />
                    <FormTextField
                        fieldName={PostFormFields.content}
                        hideValue
                        label="Conteúdo"
                        multiline
                        placeholder="Escreva o que deseja publicar"
                    />
                    <View style={styles.buttonsContainer}>
                        <Button fullWidth label="Salvar" loading={loading} onPress={handleSubmit(handleSavePost)} />
                        <Button fullWidth label="Cancelar" onPress={() => navigate("app/screens/Timeline/index")} variant="secondary" />
                    </View>
                </Form>
            </View>
        </PageLayout>
    )
}

export default CreatePost

const styles = StyleSheet.create({
    buttonsContainer: {
        gap: 16
    },
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 24,
        paddingVertical: 32,
        gap: 32
    }
})