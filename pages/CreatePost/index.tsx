import { StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormTextField } from "../../components/Form/FormTextField"
import { Header } from "../../components/Header"
import { useCreatePost } from "../../hooks/useCreatePost"

import { PostFormFields, PostFormValues, PostSchema } from "./PostSchema"

const FORM_DEFAULT_VALUES = {
    title: "",
    description: "",
}

export const CreatePost = () => {
    const { loading, savePost } = useCreatePost();
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(PostSchema)
    });

    const { handleSubmit, reset } = methods

    const handleCancel = () => {
        // TODO: Voltar para a tela inicial
    }

    const handleReset = () => {
        reset(FORM_DEFAULT_VALUES);
    };

    const handleSavePost = async (data: PostFormValues) => {
        await savePost(data);
    }

    return (
        <View style={styles.container}>
            <Header />
            <Button fullWidth label="Cancelar" onPress={handleCancel} />
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
                <Button fullWidth label="Salvar" onPress={handleSubmit(handleSavePost)} />
                <Button fullWidth label="Limpar formulário" onPress={handleReset} />
            </Form>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center"
    }
})