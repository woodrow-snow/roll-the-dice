import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons";

type ModalCloseButtonProps = {
    closeFn: (bool: boolean) => void;
}

/** Renders a close control that asks its parent to hide the modal. */
export default function ModalCloseButton({closeFn}:ModalCloseButtonProps) {
    return (
        <Pressable onPress={() => { closeFn(false) }}>
            <Ionicons name="close" size={30} />
        </Pressable>
    )
}
