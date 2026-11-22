import AsyncStorage from '@react-native-async-storage/async-storage';
import baseCardGames from '../public/data/baseGames.json'

export type Game = {
    name: string;
    p_min: number;
    p_max: number;
    time: string;
    age: string;
    link: string;
    coopType: string;
}

// ---------- Keys here ----------
const BOARDKEY = "board_games"
const CARDKEY = "card_games"
const VIDEOKEY = "video_games"

export const getBaseGames = async (): Promise<Game[]> => {
    /*
        This Method gets the base card games from the json file in the public/data folder and converts into a javascript object for use in the program.
    */
    return JSON.parse(JSON.stringify(baseCardGames)).baseCardGames
}

export const getGames = async (gameType?:string, key?:string): Promise<Game[]> => {
    // checking if there is a key, if there isn't then getting it.
    if (!key) {
        key = getKey(gameType)
    } 

    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

export const addGame = async (
    game: Game,
    gameType: string
): Promise<Game> => {
    // getting key
    const key = getKey(gameType)

    const games = await getGames(undefined, key);
    const newGame: Game = {
        ...game
    };

    console.log([newGame, ...games])
    
    await AsyncStorage.setItem(key, JSON.stringify([newGame, ...games]))
    return newGame;
}

export const getAllGames = async (): Promise<Game[]> => {

    // creating an array for each type
    const base = await getBaseGames();
    const video = await getGames('', VIDEOKEY);
    const board = await getGames('', BOARDKEY);
    const card = await getGames('', CARDKEY);

    const gamesToReturn = [
        ...base,
        ...video,
        ...board,
        ...card
    ]

    return gamesToReturn;
}

function getKey(gameType: string): string {
    if (gameType === "Board Games") {
        return BOARDKEY
    } else if (gameType === "Card Games") {
       return CARDKEY
    } else if (gameType === "Video Games") {
        return VIDEOKEY
    }

    return ''
}