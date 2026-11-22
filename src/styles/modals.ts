import { StyleSheet } from "react-native"

export const modals = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dialog: {
        backgroundColor: "white",
        padding: 24,
        borderRadius: 12,
        width: '80%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
})