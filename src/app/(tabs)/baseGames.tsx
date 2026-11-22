import { Game, getBaseGames } from "@/storage/games";
import { globals } from "@/styles/global";
import { ScrollView } from "react-native";
import DisplayTable from "../components/DisplayTable";
import { useState } from "react";
import { useFocusEffect } from "expo-router";

/** Loads and displays the bundled base games whenever this screen is focused. */
export default function BaseGamesScreen() {
    // getting data for board games
    const [games, setGames] = useState<Game[]>([]);

    useFocusEffect(() => {
        /** Loads bundled base games into the screen state. */
        const loadGames = async () => {
            const data = await getBaseGames();
            setGames(data);
        };

        loadGames();
    });
    
    console.log(games)

    return (
        <ScrollView style={globals.container}>
            <DisplayTable data={games} />
        </ScrollView>
    )
}