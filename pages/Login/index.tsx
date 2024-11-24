import { Alert, StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormTextField } from "../../components/Form/FormTextField"
import { PageLayout } from "../../templates/PageLayout"
import { LoginFormFields, LoginFormValues, LoginSchema } from "./LoginSchema"
import { useLogin } from "../../hooks/useLogin"

const FORM_DEFAULT_VALUES = {
    username: "",
    password: "",
}

export const Login = () => {
    const { loading, loginUser } = useLogin()
    const methods = useForm<LoginFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(LoginSchema)
    })

    const { handleSubmit } = methods

    const handleSubmitLogin = async (data: LoginFormValues) => {
        await loginUser(data)
    }

    return (
        < PageLayout>
            <View style={styles.container}>
                <Form methods={methods}>
                    <FormTextField
                        fieldName={LoginFormFields.username}
                        label="Login"
                        placeholder="Digite seu usuário"
                    />
                    <FormTextField
                        fieldName={LoginFormFields.password}
                        hideValue
                        label="Senha"
                        placeholder="Digite sua senha"
                    />
                    <Button fullWidth label="Entrar" loading={loading} onPress={handleSubmit(handleSubmitLogin)} />
                </Form>
            </View>
        </PageLayout>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        paddingHorizontal: 24,
        paddingVertical: 32,
        gap: 32
    }
})
