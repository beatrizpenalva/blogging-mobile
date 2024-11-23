import { Alert, StyleSheet, View } from "react-native"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { FormTextField } from "../../components/Form/FormTextField"
import { Header } from "../../components/Header"
import { LoginFormFields, LoginFormValues, LoginSchema } from "./LoginSchema"
import { useLogin } from "../../hooks/useLogin"

const FORM_DEFAULT_VALUES = {
    username: "",
    password: "",
}

export const Login = () => {
    const { loading, loginUser } = useLogin();
    const methods = useForm<LoginFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(LoginSchema)
    });

    const { handleSubmit } = methods

    const handleSubmitLogin = async (data: LoginFormValues) => {
        await loginUser(data);
    };

    return (
        <View style={styles.container}>
            <Header />
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
                <Button fullWidth label="Salvar" loading={loading} onPress={handleSubmit(handleSubmitLogin)} />
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
