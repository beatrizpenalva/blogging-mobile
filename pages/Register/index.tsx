import { Alert, StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormDropdown } from "../../components/Form/FormDropdown"
import { FormTextField } from "../../components/Form/FormTextField"
import { Header } from "../../components/Header"
import { UserProfile, UserProfileLabels } from "../../model/enums"

import { RegisterFormFields, RegisterFormValues, RegisterSchema } from "./RegisterSchema"

const FORM_DEFAULT_VALUES = {
    username: '',
    password: '',
    profile: UserProfile.viewer,
}

export const Register = () => {
    const methods = useForm<RegisterFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(RegisterSchema)
    });

    const { handleSubmit } = methods

    const handleCancel = () => {
        Alert.alert("Voltar para a tela inicial")
    }

    const handleSaveNewUser = (data: RegisterFormValues) => {
        Alert.alert(`Enviar usuário e senha para a API, perfil só se mexerem na API: ${data}`)
    }

    return (
        <View style={styles.container}>
            <Header />
            <Form methods={methods}>
                <FormTextField
                    fieldName={RegisterFormFields.username}
                    label="Usuário"
                    placeholder="Digite o nome do usuário"
                />
                <FormTextField
                    fieldName={RegisterFormFields.password}
                    hideValue
                    label="Senha"
                    placeholder="Digite sua senha"
                />
                <FormDropdown
                    fieldName={RegisterFormFields.profile}
                    label="Perfil"
                    options={[
                        { label: UserProfileLabels.admin, value: UserProfile.admin },
                        { label: UserProfileLabels.viewer, value: UserProfile.viewer }
                    ]}
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