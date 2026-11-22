import { StyleSheet } from "react-native";

export const colors = {
    primary: '#02182B',
    secondary: '#70798C',
    tri: '#EADEDA',
    black: "#000000",
    barActive: '#c3ccdf',
    textInputBackground: '#fff1ec',
}

export const globals = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    container: {
        flex: 1,
        backgroundColor: colors.tri,
        paddingTop: 30,
        paddingHorizontal: 20
    },
    heading: {
        fontSize: 25,
        fontWeight: 700,
        textAlign: 'center',
    },
    button: {
        backgroundColor: colors.secondary,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    textInput: {
        fontSize: 20,
        borderColor: colors.primary,
        borderWidth: 2,
        borderRadius: 10,
        padding: 16,
        textAlign: 'left',
        backgroundColor: colors.textInputBackground,
        width: '100%',
    },
})