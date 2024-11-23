import type { FormEventHandler, PropsWithChildren } from "react";
import type { UseFormReturn, FieldValues } from "react-hook-form";

import { FormProvider } from "react-hook-form";

type FormProps<T extends FieldValues> = PropsWithChildren<{
    methods: UseFormReturn<T>;
}>

export const Form = <T extends FieldValues>({ children, methods }: FormProps<T>) => (
    <FormProvider {...methods}>
        {children}
    </FormProvider>
);
