import { globals, colors } from "@/styles/global";
import { Text, ScrollView, StyleSheet, Modal, Pressable, View } from "react-native";
import { useState } from "react";
import GetGameForm from "../components/GetGameForm";
import { modals } from "@/styles/modals";
import ModalCloseButton from "../components/ModalCloseButton";

/** Renders the home screen with the about modal and game-selection form. */
export default function HomeScreen() {
  // About us Modal State
  const [aboutVisible, setAboutVisible] = useState(false);

  return (
    // The view in which everything on the home page exists
    <ScrollView style={globals.container}>
      {/* Button to allow user to view the about modal */}
      <Pressable onPress={() => { setAboutVisible(true) }} style={[globals.button, styles.aboutButton]}> 
        <Text style={globals.text}>Click here for more info!</Text>
      </Pressable>

      {/* about modal */}
      <Modal
        visible={aboutVisible}
        transparent={true}
        animationType="fade"
      >
        {/* Top level view to dim the background */}
        <View style={modals.overlay}>
          {/* View to hold actual dialog box */}
          <View style={modals.dialog}>
            {/* View to hold header and close button */}
            <View style={modals.header}>
              <Text style={globals.heading}>About "Roll the Dice"</Text>
              {/* close button */}
              <ModalCloseButton closeFn={setAboutVisible}/>
            </View>
            {/* dialog content */}
            <Text style={[globals.text, styles.dText]}>The purpose of this app is to allow you enter in a few details and then get a game to play! Easy and simple! You can add video, board, and card games in their respective pages that we will use to choose from. Don't worry, we have a few suggestions to get you started. On the data page, you can save any information you have entered. You can also upload data you have saved in the past if anything is missing! To get started fillout the form below and roll the dice!</Text>
          </View>
        </View>
      </Modal>

      {/* Form that gets game information and returns a game */}
      <View style={styles.formbox}>
        <Text style={globals.heading}>Pick a Game!</Text>
        <GetGameForm />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dText: {
    textAlign: 'center'
  },
  aboutButton: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  formbox: {
    borderColor: colors.primary,
    borderWidth: 3,
    borderRadius: 20,
    padding: 16,
  },
})

