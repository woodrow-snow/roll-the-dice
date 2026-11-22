import { globals } from "@/styles/global"
import { ScrollView, Text } from "react-native"
import AddGameForm from "../components/AddGameForm"

/** Displays the form for adding a game inside a scrollable screen. */
export default function AddGameScreen() {
    return (
        <ScrollView style={globals.container}>
            <AddGameForm />
        </ScrollView>
    )
}