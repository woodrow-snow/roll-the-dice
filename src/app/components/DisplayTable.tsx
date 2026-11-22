import { StyleSheet, View, Text } from "react-native";
import { Game } from "@/storage/games";
import GameColumnThree from "./GameColumnThree";
import { colors, globals } from "@/styles/global";

type DisplayTableProps = {
    data: Game[];
}

export default function DisplayTable({ data } : DisplayTableProps) {
    /*
        This component is given data to turn into a table that allows users to view the data that they have.
        It will do this by showing the id, name and a view more button.
        The view more button will display the rest of the information as a model.
    */
    
    // This view is the whole table
    return (
        <View style={styles.container}> {/* Parent Element*/}
            <View style={styles.table}> {/* Table */}
                {/* creating each row of the table */}
                {data.map((game) => (
                    // row for each table
                    <View style={styles.row}> {/* Row */}
                        <View style={styles.cell}> {/* Column 2 */}
                            <Text style={[globals.text, styles.text]}>{game.name}</Text>
                        </View>
                        <View style={styles.cell}> {/* Column 3 */}
                            <GameColumnThree game={game}/>
                        </View>
                    </View>
                ))}
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    table: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
    },
    row: {
        flexDirection: 'row',
        gap: 8,
        width: '100%',
        borderColor: colors.primary,
        borderRadius: 16,
        borderWidth: 2,
        padding: 8,
        justifyContent: 'space-between',
    },
    cell: {
        width: '48%',
        // backgroundColor: 'pink',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center'
    }
});