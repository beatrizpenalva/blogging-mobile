import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
    "app/screens/CreatePost/index": undefined
    "app/screens/Login/index": undefined
    "app/screens/Register/index": undefined
    "app/screens/Timeline/index": undefined
}

export type CreatePostNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/CreatePost/index">
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Login/index">
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Register/index">
export type TimelineScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Timeline/index">