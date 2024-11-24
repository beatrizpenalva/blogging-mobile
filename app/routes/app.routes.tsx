import { createNativeStackNavigator } from "@react-navigation/native-stack"

import CreatePost from "../screens/CreatePost"
import Login from "../screens/Login"
import Register from "../screens/Register"
import Timeline from "../screens/Timeline"

const { Navigator, Screen } = createNativeStackNavigator()

const AppRoutes = () => {
    return (
        <Navigator initialRouteName="screens/Login/index">
            <Screen
                name="screens/CreatePost/index"
                component={CreatePost}
                options={{
                    title: "Nova publicação",
                    headerStyle: { backgroundColor: "#276cb1" }
                }}
            />
            <Screen
                name="screens/Login/index"
                component={Login}
                options={{
                    title: "Entrar",
                    headerStyle: { backgroundColor: "#276cb1" }
                }}
            />
            <Screen
                name="screens/Register/index"
                component={Register}
                options={{
                    title: "Cadastro",
                    headerStyle: { backgroundColor: "#276cb1" }
                }}
            />
            <Screen
                name="screens/Timeline/index"
                component={Timeline}
                options={{
                    title: "Linha do tempo",
                    headerStyle: { backgroundColor: "#276cb1" }
                }}
            />
        </Navigator>
    )
}

export default AppRoutes