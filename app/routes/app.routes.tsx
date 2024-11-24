import { StyleSheet } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import CreatePost from "../screens/CreatePost"
import Login from "../screens/Login"
import Register from "../screens/Register"
import Timeline from "../screens/Timeline"
import { PermissionProvider } from "../../context/permission"
import { SnackbarProvider } from "../../context/snackbar";

const Tab = createBottomTabNavigator()

const AppRoutes = () => {
    return (
        <SnackbarProvider>
            <PermissionProvider>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: styles.tabBar,
                        tabBarActiveTintColor: "#fafafa",
                        tabBarInactiveTintColor: "#B0B0B0",
                    }}
                >
                    <Tab.Screen
                        name="screens/Timeline/index"
                        component={Timeline}
                        options={{
                            tabBarLabel: "Início",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home" color={color} size={size} />
                            ),
                            title: "Linha do tempo",
                            headerStyle: { backgroundColor: "#276cb1" }
                        }}
                    />
                    <Tab.Screen
                        name="screens/CreatePost/index"
                        component={CreatePost}
                        options={{
                            tabBarLabel: "Postar",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="create" color={color} size={size} />
                            ),
                            title: "Nova publicação",
                            headerStyle: { backgroundColor: "#276cb1" }
                        }}
                    />
                    <Tab.Screen
                        name="screens/Register/index"
                        component={Register}
                        options={{
                            tabBarLabel: "Cadastro",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="person" color={color} size={size} />
                            ),
                            title: "Novo usuário",
                            headerStyle: { backgroundColor: "#276cb1" }
                        }}
                    />
                    <Tab.Screen
                        name="screens/Login/index"
                        component={Login}
                        options={{
                            tabBarLabel: "Sair",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="log-out" color={color} size={size} />
                            ),
                            tabBarStyle: { display: "none" },
                            title: "Login",
                            headerStyle: { backgroundColor: "#276cb1" }
                        }}
                    />
                </Tab.Navigator>
            </PermissionProvider>
        </SnackbarProvider>
    )
}

export default AppRoutes

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#276cb1",
        height: 60,
    }
})