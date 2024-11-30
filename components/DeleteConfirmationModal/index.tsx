import { Modal, StyleSheet, Text, View } from "react-native"

import { Button } from "../Button"
import { useDeletePost } from "../../hooks/useDeletePost"

type DeleteConfirmationModalProps = {
    id: number | string
    onClose: () => void
    open?: boolean
}

export const DeleteConfirmationModal = ({ id, onClose, open }: DeleteConfirmationModalProps) => {
    const { loading, deletePost } = useDeletePost({ id, onToggleModal: onClose })

    return (
        <Modal
            animationType="fade"
            onRequestClose={onClose}
            transparent
            visible={open}
        >
            <View style={styles.modalView}>
                <View style={styles.contentContainer}>
                    <Text style={styles.title}>Tem certeza que deseja excluir a publicação?</Text>
                    <Text style={styles.subtitle}>Atenção, pois essa ação não poderá ser desfeita.</Text>
                    <View style={styles.actionsContainer}>
                        <Button label="Excluir" loading={loading} onPress={deletePost} variant="danger" />
                        <Button disabled={loading} label="Cancelar" onPress={onClose} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    actionsContainer: {
        display: "flex",
        flexDirection: "row",
        gap: 12,
        justifyContent: "flex-end"
    },
    contentContainer: {
        backgroundColor: "white",
        borderRadius: 4,
        padding: 24,
        gap: 12,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: 20,
    },
    title: {
        fontWeight: 600,
        fontSize: 18
    },
    subtitle: {
        fontSize: 16
    },
});