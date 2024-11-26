import type { InferType as yupInferType } from "yup"
import { object as yupObject, string as yupString } from "yup"

import { UserProfile } from "../../../model/UserProfile"
import { getFormFields } from "../../../utils/getFormFields"

export const RegisterSchema = yupObject({
    username: yupString()
        .required("Campo obrigatório"),
    password: yupString()
        .required("Campo obrigatório"),
    profile: yupString()
        .oneOf([UserProfile.admin, UserProfile.viewer])
        .required("Campo obrigatório")
}).required()

export type RegisterFormValues = yupInferType<typeof RegisterSchema>

export const RegisterFormFields: RegisterFormValues = getFormFields(RegisterSchema.fields)