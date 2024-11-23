import type { PropsWithChildren } from "react"
import { View } from "react-native";

import { Snackbar } from "../../components/Snackbar"
import { SnackbarProvider } from "../../context/snackbar";
import { useSnackbar } from "../../hooks/useSnackbar"

type PageLayoutProps = PropsWithChildren<{}>

export const PageLayout = ({
    children,
}: PageLayoutProps) => {
    const { snackbar } = useSnackbar();

    return (
        <SnackbarProvider>
            <View>{children}</View>
            <Snackbar
                message={snackbar.message}
                show={snackbar.show}
                variant={snackbar.variant}
            />
        </SnackbarProvider>
    );
};