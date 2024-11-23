import type { PropsWithChildren } from "react"
import { View } from "react-native";

import { PermissionProvider } from "../../context/permission";
import { Snackbar } from "../../components/Snackbar"
import { SnackbarProvider } from "../../context/snackbar";
import { useSnackbar } from "../../hooks/useSnackbar"

type PageLayoutProps = PropsWithChildren<{}>

export const PageLayout = ({
    children,
}: PageLayoutProps) => {
    const { snackbar } = useSnackbar();

    return (
        <PermissionProvider>
            <SnackbarProvider>
                <View>{children}</View>
                <Snackbar
                    message={snackbar.message}
                    show={snackbar.show}
                    variant={snackbar.variant}
                />
            </SnackbarProvider>
        </PermissionProvider>
    );
};