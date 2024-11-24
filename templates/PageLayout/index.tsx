import { type PropsWithChildren } from "react"
import { StyleSheet, View } from "react-native"

import { Header } from "../../components/Header"
import { Snackbar } from "../../components/Snackbar"
import { useSnackbar } from "../../hooks/useSnackbar"

type PageLayoutProps = PropsWithChildren<{}>

export const PageLayout = ({
    children,
}: PageLayoutProps) => {
    const { snackbar } = useSnackbar()

    return (
        <>
            <Header />
            <View style={styles.container}>{children}</View>
            <Snackbar
                message={snackbar.message}
                show={snackbar.show}
                variant={snackbar.variant}
            />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
})