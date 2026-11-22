import { Game } from "@/storage/games"
import { Modal, View, Text, Pressable, Linking, StyleSheet } from "react-native"
import { useState } from "react";
import { modals } from "@/styles/modals";
import { globals } from "@/styles/global";
import ModalCloseButton from "./ModalCloseButton";

type GameColumnThreeProps = {
    game: Game;
}

export default function GameColumnThree({game}: GameColumnThreeProps) {
    const [visible, setVisible] = useState(false);
    
    return (
        <View>
            {/* Button to open modal */}
            {/* Other things like the open button will be here */}
            <Pressable onPress={() => setVisible(true)} style={globals.button}>
                <Text style={globals.text}>More Info!</Text>
            </Pressable>

            {/* creating modal */}
            <Modal
                visible={visible}
                transparent={true}
                animationType="fade"
            >
                <View style={modals.overlay}>
                    <View style={modals.dialog}>
                        {/* header */}
                        <View style={modals.header}>
                            <Text style={globals.heading}>{game.name}</Text>
                            <ModalCloseButton closeFn={setVisible} />
                        </View>
                        {/* content */}
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
        </View>
    );
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