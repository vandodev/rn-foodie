import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style.js";


function Button(props) {
    return <TouchableOpacity style={styles.btn} onPress={props.onPress}>
        <Text style={styles.texto}>{props.texto}</Text>
    </TouchableOpacity>
}

export default Button;