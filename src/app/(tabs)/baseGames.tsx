import { Game, getBaseGames } from "@/storage/games";
import { globals } from "@/styles/global";
import { ScrollView } from "react-native";
import DisplayTable from "../components/DisplayTable";
import { useState } from "react";
import { useFocusEffect } from "expo-router";

export default function BaseGamesScreen() {
    // getting data for board games
    const [games, setGames] = useState<Game[]>([]);

    useFocusEffect(() => {
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