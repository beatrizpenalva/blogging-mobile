import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
    "app/screens/CreatePost/index": undefined
    "app/screens/EditPost/index": { id: number | string }
    "app/screens/Login/index": undefined
    "app/screens/PostDetails/index": { id: number | string }
    "app/screens/Register/index": undefined
    "app/screens/Timeline/index": undefined
}

export type CreatePostNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/CreatePost/index">
export type EditPostScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/EditPost/index">
export type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Login/index">
export type PostDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/PostDetails/index">
export type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Register/index">
export type TimelineScreenNavigationProp = StackNavigationProp<RootStackParamList, "app/screens/Timeline/index">
