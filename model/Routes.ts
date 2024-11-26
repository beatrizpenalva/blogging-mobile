import { StackNavigationProp } from "@react-navigation/stack"

enum Screens {
    CreatePost = "CreatePost",
    Login = "Login",
    Register = "Register",
    Timeline = "Timeline",
}

export const ScreensPath = {
    [Screens.CreatePost]: "screens/CreatePost/index",
    [Screens.Login]: "screens/Login/index",
    [Screens.Register]: "screens/Register/index",
    [Screens.Timeline]: "screens/Timeline/index",
}

type RootStackParamList = {
    "app/screens/CreatePost/index": undefined
    "app/screens/Login/index": undefined
    "app/screens/Register/index": undefined
    "app/screens/Timeline/index": undefined
}

export type CreatePostNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/CreatePost/index">
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Login/index">
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Register/index">
export type TimelineScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Timeline/index">
