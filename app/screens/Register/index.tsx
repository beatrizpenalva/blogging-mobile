import type { TimelineScreenNavigationProp } from "../../routes/types"

import { StyleSheet, View } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../../components/Button"
import { Form } from "../../../components/Form"
import { FormDropdown } from "../../../components/Form/FormDropdown"
import { FormTextField } from "../../../components/Form/FormTextField"
import { PageLayout } from "../../../templates/PageLayout"
import { useRegister } from "../../../hooks/useRegister"
import { Colors, UserProfile, UserProfileLabels } from "../../../model/enums"

import { RegisterFormFields, RegisterFormValues, RegisterSchema } from "./RegisterSchema"

const FORM_DEFAULT_VALUES = {
    username: "",
    password: "",
    profile: UserProfile.viewer,
}

const Register = () => {
    const { navigate } = useNavigation<TimelineScreenNavigationProp>()
    const { loading, onRegister } = useRegister()
    const methods = useForm<RegisterFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(RegisterSchema)
    })

    const { handleSubmit, reset } = methods

    const handleSaveNewUser = (data: RegisterFormValues) => {
        onRegister(data, reset)
    }

    return (
        <PageLayout>
            <View style={styles.container}>
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
                    <View style={styles.buttonsContainer}>
                        <Button fullWidth label="Salvar" loading={loading} onPress={handleSubmit(handleSaveNewUser)} />
                        <Button disabled={loading} fullWidth label="Cancelar" onPress={() => navigate("app/screens/Timeline/index")} variant="secondary" />
                    </View>
                </Form>
            </View>
        </PageLayout>
    )
}

export default Register

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