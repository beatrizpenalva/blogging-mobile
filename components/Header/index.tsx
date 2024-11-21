import { Alert, StyleSheet, Text, View } from "react-native"

import { Button } from "../../components/Button"

type HeaderProps = {
    user?: string
}
export const Header = ({ user }: HeaderProps) => {
    const handleButtonPress = () => {
        Alert.alert("Sair")
    }

    return (
        <View style={styles.header}>
            <Text style={styles.title}>Blogging</Text>
            {user ? <Button label="Sair" onPress={handleButtonPress} /> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#276cb1",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        width: "100%"
    },
    title: {
        color: "#fafafa",
        fontWeight: 700,
        fontSize: 24
    }
})
