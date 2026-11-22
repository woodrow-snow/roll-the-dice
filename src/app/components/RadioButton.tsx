import {
    View,
    Text,
    Pressable,
    StyleProp,
    ViewStyle, } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const buttonSize = 25

type RadioButtonProps = {
    options: string[];
    selectedOptions: string;
    onSelect: (option: string) => void;
    style?: StyleProp<ViewStyle>;
};

/** Renders selectable options and indicates which option is currently selected. */
export default function RadioButton({
    options,
    selectedOptions,
    onSelect,
    style,
}: RadioButtonProps) {
    return (
        <View style={style}>
            {options.map((option) => (
                <Pressable
                    key={option}
                    onPress={() => onSelect(option)}
                >
                    <View>
                        <Text style={{fontSize: 20}}>
                            {selectedOptions === option ? <Ionicons name="radio-button-on" size={buttonSize} /> : <Ionicons name='radio-button-off' size={buttonSize} />} {option}
                        </Text>
                    </View>    
                </Pressable>
            ))}
        </View>
    );
}