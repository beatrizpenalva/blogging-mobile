import { type PropsWithChildren } from "react"

import { StyleSheet, View } from "react-native"

import { ErrorBoundary } from "react-error-boundary"

import { ErrorBoundaryFallback } from "../../components/ErrorBoundaryFallback"
import { Header } from "../../components/Header"
import { Snackbar } from "../../components/Snackbar"
import { useSnackbar } from "../../hooks/useSnackbar"

type PageLayoutProps = PropsWithChildren<{}>

export const PageLayout = ({
    children,
}: PageLayoutProps) => {
    const { snackbar } = useSnackbar()

    return (
        <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
            <Header />
            <View style={styles.container}>{children}</View>
            <Snackbar
                message={snackbar.message}
                show={snackbar.show}
                variant={snackbar.variant}
            />
        </ErrorBoundary >
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})