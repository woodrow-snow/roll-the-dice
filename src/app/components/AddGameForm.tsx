import { colors, globals } from "@/styles/global";
import { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import RadioButton from "./RadioButton";
import { addGame } from "@/storage/games";
import { Href, router } from "expo-router";

/** Collects a new game's details, saves the game, and navigates to its list. */
export default function AddGameForm() {
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [p_min, setPMin] = useState('');
    const [p_max, setPMax] = useState('');
    const [age, setAge] = useState('');
    const [coopType, setCoopType] = useState('');
    const [link, setLink] = useState('');
    const [gameType, setGameType] = useState('');

    // radio button options
    const coopTypes = ['Co-op', 'Competitive']
    const gameTypes = ['Board Games', 'Card Games', 'Video Games']

    /** Validates and saves the entered game, clears the form, and opens its game list. */
    const handleAddGame = async () => {
        // checking if values are entered
        if (!name || !time || !p_min || !p_max || !age || !coopType || !gameType) {
            Alert.alert('Error', 'Please enter name, time, min, max, age, co-op type, and game type!')
            return;
        }

        await addGame(
            {
                name,
                time,
                p_min,
                p_max,
                age,
                coopType,
                link,
            },
            gameType
        );

        let page: Href = '/';

        if (gameType === "Board Games") {
            page = '/(tabs)/boardGames'
        } else if (gameType === "Card Games") {
            page = '/(tabs)/cardGames'
        } else if (gameType === "Video Games") {
            page = '/(tabs)/videoGames'
        }

        setName('')
        setTime('')
        setPMin('')
        setPMax('')
        setAge('')
        setCoopType('')
        setLink('')
        setGameType('')

        Alert.alert('Success', 'Game added Successfully')
        router.push(page);
    }

    return (
        <View style={styles.form}>
            <TextInput
                placeholder="Game name"
                placeholderTextColor={colors.primary}
                value={name}
                onChangeText={setName}
                style={globals.textInput}
            />

            <TextInput
                placeholder="Time to play"
                placeholderTextColor={colors.primary}
                value={time}
                onChangeText={setTime}
                style={globals.textInput}
            />

            <View style={styles.player}>
                <TextInput
                    placeholder="Player Min"
                    placeholderTextColor={colors.primary}
                    value={p_min}
                    onChangeText={setPMin}
                    keyboardType="numeric"
                    style={[globals.textInput,styles.playerInput]}
                />

                <TextInput
                    placeholder="Player Max"
                    placeholderTextColor={colors.primary}
                    value={p_max}
                    onChangeText={setPMax}
                    keyboardType="numeric"
                    style={[globals.textInput,styles.playerInput]}
                />
            </View>
            
            <TextInput
                placeholder="Youngest Age to play"
                placeholderTextColor={colors.primary}
                value={age}
                onChangeText={setAge}
                style={globals.textInput}
            />

            <View>
                <Text style={globals.text}>Co-op Type:</Text>
                <RadioButton
                    options={coopTypes}
                    selectedOptions={coopType}
                    onSelect={setCoopType}
                />
            </View>
            
            <TextInput
                placeholder="Instuctions Link"
                placeholderTextColor={colors.primary}
                value={link}
                onChangeText={setLink}
                style={globals.textInput}
            />

            <View>
                <Text style={globals.text}>What type of game is it?</Text>
                <RadioButton
                    options={gameTypes}
                    selectedOptions={gameType}
                    onSelect={setGameType}
                />
            </View>

            <TouchableOpacity style={globals.button} onPress={handleAddGame}>
                <Text style={[globals.text, styles.submit]}>Add Game</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 8,
    },
    player: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    playerInput: {
        width: '48%'
    },
    submit: {
        textAlign: 'center',
        fontWeight: 700,
    }
});