import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "../../Button"
import { Form } from ".."
import { FormTextField } from "../FormTextField"

import { SearchFormFields, SearchFormValues, SearchSchema } from "./SearchSchema"

type FormSearchProps = {
    onSearch: (data: SearchFormValues) => void
}

const FORM_DEFAULT_VALUES = {
    word: "",
}

export const FormSearch = ({ onSearch }: FormSearchProps) => {
    const methods = useForm<SearchFormValues>({
        defaultValues: FORM_DEFAULT_VALUES,
        resolver: yupResolver(SearchSchema)
    })

    const { handleSubmit } = methods

    return (
        <Form methods={methods}>
            <FormTextField
                fieldName={SearchFormFields.word}
                label="Buscar"
                placeholder="Digite uma palavra-chave"
            />
            <Button label="Buscar" onPress={handleSubmit(onSearch)} />
        </Form>
    )
}