import type { LoginScreenNavigationProp } from "../../model/Routes"

import { useEffect } from "react"
import { StyleSheet } from "react-native"

import { useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "react-native-vector-icons/Ionicons"

import CreatePost from "../screens/CreatePost"
import EditPost from "../screens/EditPost"
import Login from "../screens/Login"
import PostDetails from "../screens/PostDetails"
import Register from "../screens/Register"
import Timeline from "../screens/Timeline"
import { PermissionProvider } from "../../context/permission"
import { SnackbarProvider } from "../../context/snackbar";
import { Colors } from "../../model/Colors"
import { RootStackParamList } from "../../model/Routes"

const Tab = createBottomTabNavigator<RootStackParamList>()

const AppRoutes = () => {
    const { navigate } = useNavigation<LoginScreenNavigationProp>()

    useEffect(() => {
        navigate("app/screens/Login/index");
    }, []);

    return (
        <SnackbarProvider>
            <PermissionProvider>
                <Tab.Navigator
                    initialRouteName="app/screens/Login/index"
                    screenOptions={{
                        headerTitleAlign: "center",
                        headerTintColor: Colors.white,
                        headerStyle: { backgroundColor: Colors.primary },
                        tabBarStyle: styles.tabBar,
                        tabBarActiveTintColor: Colors.white,
                        tabBarInactiveTintColor: Colors.gray,
                    }}
                >
                    <Tab.Screen
                        name="app/screens/Timeline/index"
                        component={Timeline}
                        options={{
                            tabBarLabel: "Início",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="home" color={color} size={size} />
                            ),
                            title: "Linha do tempo",
                        }}
                    />
                    <Tab.Screen
                        name="app/screens/CreatePost/index"
                        component={CreatePost}
                        options={{
                            tabBarLabel: "Postar",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="create" color={color} size={size} />
                            ),
                            title: "Nova publicação",
                        }}
                    />
                    <Tab.Screen
                        name="app/screens/Register/index"
                        component={Register}
                        options={{
                            tabBarLabel: "Cadastro",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="person" color={color} size={size} />
                            ),
                            title: "Novo usuário",
                        }}
                    />
                    <Tab.Screen
                        name="app/screens/Login/index"
                        component={Login}
                        options={{
                            tabBarLabel: "Sair",
                            tabBarIcon: ({ color, size }) => (
                                <Ionicons name="log-out" color={color} size={size} />
                            ),
                            tabBarStyle: { display: "none" },
                            title: "Login",
                        }}
                    />
                    <Tab.Screen
                        name="app/screens/EditPost/index"
                        component={EditPost}
                        options={{
                            tabBarItemStyle: { display: "none" },
                            title: "Edição",
                        }}
                    />
                    <Tab.Screen
                        name="app/screens/PostDetails/index"
                        component={PostDetails}
                        options={{
                            tabBarItemStyle: { display: "none" },
                            title: "Detalhes",
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