import { Game } from "@/storage/games";
import { modals } from "@/styles/modals";
import { Modal, View, Text, Linking, Pressable, StyleSheet } from "react-native";
import ModalCloseButton from "./ModalCloseButton";
import { globals } from "@/styles/global";

type ChosenGameProps = {
    game: Game;
    visible: boolean;
    closeModal: (bool: boolean) => void;
}

export default function ChosenGame({
    game,
    visible,
    closeModal
}: ChosenGameProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="fade"
        >
            <View style={modals.overlay}>
                <View style={modals.dialog}>
                    <View style={modals.header}>
                        <Text style={[globals.heading]}>Your Game is: {game.name}!</Text>
                        <ModalCloseButton closeFn={closeModal}/>
                    </View>
                        <Text style={[globals.text, styles.text]}>Players: {game.p_min} - {game.p_max}</Text>
                        <Text style={[globals.text, styles.text]}>Average time to play: {game.time}</Text>
                        <Text style={[globals.text, styles.text]}>Ages {game.age}+</Text>
                        <Text style={[globals.text, styles.text]}>Cooperation Type: {game.coopType}</Text>
                        <Pressable onPress={() => Linking.openURL(game.link)}>
                            <Text style={[globals.text, globals.button, styles.button]}>Learn how to play {game.name} here!</Text>
                        </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 8,
        textAlign: 'center',
    },
    text: {
        marginBottom: 8,
    }
})