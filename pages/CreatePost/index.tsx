import { StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormTextField } from "../../components/Form/FormTextField"
import { PageLayout } from "../../templates/PageLayout"
import { useCreatePost } from "../../hooks/useCreatePost"

import { PostFormFields, PostFormValues, PostSchema } from "./PostSchema"

const FORM_DEFAULT_VALUES = {
    title: "",
    description: "",
}

export const CreatePost = () => {
    const { loading, savePost } = useCreatePost()
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(PostSchema)
    })

    const { handleSubmit } = methods

    const handleCancel = () => {
        // TODO: Voltar para a tela inicial
    }

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
                        <Button fullWidth label="Cancelar" onPress={handleCancel} variant="secondary" />
                    </View>
                </Form>
            </View>
        </PageLayout>
    )
}

const styles = StyleSheet.create({
    buttonsContainer: {
        gap: 16
    },
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingHorizontal: 24,
        paddingVertical: 32,
        gap: 32
    }
})