import { Alert, StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormTextField } from "../../components/Form/FormTextField"
import { Header } from "../../components/Header"

import { PostFormFields, PostFormValues, PostSchema } from "./PostSchema"

const FORM_DEFAULT_VALUES = {
    title: '',
    description: '',
}

export const CreatePost = () => {
    const methods = useForm<PostFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(PostSchema)
    });

    const { handleSubmit } = methods

    const handleCancel = () => {
        Alert.alert("Voltar para a tela inicial")
    }

    const handleSaveNewUser = (data: PostFormValues) => {
        Alert.alert(`Enviar dados da publicacao: ${data}`)
    }

    return (
        <View style={styles.container}>
            <Header />
            <Form methods={methods}>
                <FormTextField
                    fieldName={PostFormFields.title}
                    label="Título"
                    multiline
                    placeholder="Digite o título da publicação"
                />
                <FormTextField
                    fieldName={PostFormFields.description}
                    hideValue
                    label="Conteúdo"
                    multiline
                    placeholder="Escreva o que deseja publicar"
                />
                <Button fullWidth label="Salvar" onPress={handleSubmit(handleSaveNewUser)} />
                <Button fullWidth label="Cancelar" onPress={handleCancel} />
            </Form>
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