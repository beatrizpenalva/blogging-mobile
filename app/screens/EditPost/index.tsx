import type { RouteProp } from "@react-navigation/native"

import { Text } from "react-native"

import { PageLayout } from "../../../templates/PageLayout"
import { RootStackParamList } from "../../../model/Routes"

type EditPostProps = {
    route: RouteProp<RootStackParamList, "app/screens/EditPost/index">
}

const EditPost: React.FC<EditPostProps> = ({ route }) => {
    const { id } = route.params;

    console.log("id", id)

    return (
        <PageLayout>
            <Text>Aqui será a tela de edição da postagem</Text>
        </PageLayout>
    )
}

export default EditPost