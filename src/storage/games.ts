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

/** Loads the bundled base games and returns them as game records. */
export const getBaseGames = async (): Promise<Game[]> => {
    return JSON.parse(JSON.stringify(baseCardGames)).baseCardGames
}

/** Reads saved games for the requested type from AsyncStorage. */
export const getGames = async (gameType?:string, key?:string): Promise<Game[]> => {
    // checking if there is a key, if there isn't then getting it.
    if (!key) {
        key = getKey(gameType)
    } 

    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : [];
};

/** Saves a game under its type's storage key and returns the saved record. */
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

/** Combines bundled base games with all game types saved by the user. */
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

/** Maps a game type label to its AsyncStorage key. */
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