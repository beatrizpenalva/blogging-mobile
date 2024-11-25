import { Alert, StyleSheet, Text, View } from "react-native"

import { Button } from "../../components/Button"
import { Colors } from "../../model/enums"

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
        backgroundColor: Colors.primary,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        width: "100%"
    },
    title: {
        color: Colors.white,
        fontWeight: 700,
        fontSize: 24
    }
})
