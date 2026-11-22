import { Game, getAllGames, getBaseGames, getGames } from "@/storage/games";
import { colors, globals } from "@/styles/global";
import { generateNumber } from "@/utils/utils";
import { useState } from "react";
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import ChosenGame from "./ChosenGameModal";
import RadioButton from "./RadioButton";

/** Collects game preferences, selects a matching game, and shows the result modal. */
export default function GetGameForm() {
  const [playerCount, setPlayerCount] = useState("");
  const [gameType, setGameType] = useState("");
  const [coopType, setCoopType] = useState("");
  const [pickedGame, setPickedGame] = useState({});
  const [chosenVisible, setChosenVisible] = useState(false);

  const gameTypes = ["All Games", "Board Games", "Card Games", "Video Games"];
  const coopTypes = ["Co-op", "Competitive", "Both"];

  /** Validates preferences, loads and filters games, then chooses a player-count match. */
  const handleGetGame = async () => {
    if (!playerCount || !gameType || !coopType) {
      Alert.alert(
        "Error",
        "Please enter player count, game type and co-op type",
      );
    }

    let games: Game[];

    // Get all games based on type
    if (gameType === "All Games") {
      games = await getAllGames();
      // games = await getGames(gameType);
    } else if (gameType === "Card Games") {
      const base = await getBaseGames();
      const card = await getGames("Card Games");

      games = [...base, ...card];
    } else {
      games = await getGames(gameType);
    }

    // filter by Coop type
    if (coopType != "Both") {
      games = games.filter((game) => game.coopType === coopType);
    }

    // choose until player count is in range
    let counter = 0;
    while (true) {
      if (counter >= 11) {
        Alert.alert("Error", "Not able to find game with selected preferences");
      }

      // getting number
      const randoNum = generateNumber(0, games.length - 1);

      // get game from array
      const chosenGame = games[randoNum];

      // check game for range
      if (
        Number(chosenGame.p_min) <= Number(playerCount) &&
        Number(chosenGame.p_max) >= Number(playerCount)
      ) {
        setPickedGame(chosenGame);
        setChosenVisible(true);
        break;
      }

      counter++;
    }
  };

  return (
    // might need to make this view a scroll view... not sure yet
    <View style={styles.form}>
      {/* getting number of people playing */}
      <TextInput
        style={[globals.textInput]}
        placeholder="People Playing (min of 1)"
        placeholderTextColor={colors.primary}
        value={playerCount}
        onChangeText={setPlayerCount}
        keyboardType="numeric"
      />

      <Text style={[globals.text, styles.selectone]}>
        Select one from each column
      </Text>
      <View style={styles.radios}>
        {/* getting game type */}
        <RadioButton
          options={gameTypes}
          selectedOptions={gameType}
          onSelect={setGameType}
        />

        {/* getting co-op type */}
        <RadioButton
          options={coopTypes}
          selectedOptions={coopType}
          onSelect={setCoopType}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleGetGame}
        style={[globals.button, styles.submit]}
      >
        <Text style={globals.text}>Roll the Dice</Text>
      </TouchableOpacity>

      <ChosenGame
        game={pickedGame}
        visible={chosenVisible}
        closeModal={setChosenVisible}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    marginTop: 16,
  },
  playerCount: {
    borderColor: colors.primary,
    borderWidth: 2,
    borderRadius: 10,
    padding: 16,
    textAlign: "left",
    backgroundColor: colors.textInputBackground,
    width: "100%",
  },
  submit: {
    backgroundColor: colors.secondary,
    marginTop: 4,
  },
  radios: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-between",
    width: "100%",
  },
  selectone: {
    paddingTop: 16,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1.5,
  },
});
