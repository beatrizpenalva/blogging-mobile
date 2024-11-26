import { StyleSheet } from "react-native"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import CreatePost from "../screens/CreatePost"
import Login from "../screens/Login"
import Register from "../screens/Register"
import Timeline from "../screens/Timeline"
import { PermissionProvider } from "../../context/permission"
import { SnackbarProvider } from "../../context/snackbar";
import { Colors } from "../../model/Colors"

const Tab = createBottomTabNavigator()

const AppRoutes = () => {
    return (
        <SnackbarProvider>
            <PermissionProvider>
                <Tab.Navigator
                    screenOptions={{
                        tabBarStyle: styles.tabBar,
                        tabBarActiveTintColor: Colors.white,
                        tabBarInactiveTintColor: Colors.gray,
                    }}
                >
                    <Tab.Screen
                        name={Navigation.timeline}
                        component={Timeline}
                        options={{
                            tabBarLabel: "Início",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home" color={color} size={size} />
                            ),
                            title: "Linha do tempo",
                            headerStyle: { backgroundColor: Colors.primary }
                        }}
                    />
                    <Tab.Screen
                        name={Navigation.createPost}
                        component={CreatePost}
                        options={{
                            tabBarLabel: "Postar",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="create" color={color} size={size} />
                            ),
                            title: "Nova publicação",
                            headerStyle: { backgroundColor: Colors.primary }
                        }}
                    />
                    <Tab.Screen
                        name={Navigation.register}
                        component={Register}
                        options={{
                            tabBarLabel: "Cadastro",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="person" color={color} size={size} />
                            ),
                            title: "Novo usuário",
                            headerStyle: { backgroundColor: Colors.primary }
                        }}
                    />
                    <Tab.Screen
                        name={Navigation.login}
                        component={Login}
                        options={{
                            tabBarLabel: "Sair",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="log-out" color={color} size={size} />
                            ),
                            tabBarStyle: { display: "none" },
                            title: "Login",
                            headerStyle: { backgroundColor: Colors.primary }
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
        backgroundColor: Colors.primary,
        height: 60,
    }
})