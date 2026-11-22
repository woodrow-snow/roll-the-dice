import { globals } from "@/styles/global"
import { ScrollView, Text } from "react-native"
import AddGameForm from "../components/AddGameForm"

export default function AddGameScreen() {
    return (
        <ScrollView style={globals.container}>
            <AddGameForm />
        </ScrollView>
    )
}