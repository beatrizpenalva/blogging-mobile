import type { InferType as yupInferType } from "yup"
import { object as yupObject, string as yupString } from "yup"

import { getFormFields } from "../../utils/getFormFields"

export const LoginSchema = yupObject({
    username: yupString()
        .required('Campo obrigatório'),
    password: yupString()
        .required('Campo obrigatório')
}).required()

export type LoginFormValues = yupInferType<typeof LoginSchema>

export const LoginFormFields: LoginFormValues = getFormFields(LoginSchema.fields)