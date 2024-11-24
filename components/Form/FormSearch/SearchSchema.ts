import type { InferType as yupInferType } from "yup"
import { object as yupObject, string as yupString } from "yup"

import { getFormFields } from "../../../utils/getFormFields"

export const SearchSchema = yupObject({
    word: yupString()
        .required("Campo obrigatório")
}).required()

export type SearchFormValues = yupInferType<typeof SearchSchema>

export const SearchFormFields: SearchFormValues = getFormFields(SearchSchema.fields)