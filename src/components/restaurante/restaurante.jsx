import { Image, Text, TouchableOpacity, View } from "react-native";
import icons from "../../constants/icons.js";
import { styles } from "./restaurante.style.js";

function Restaurante(props) {
    return <View style={styles.restaurante}>
        <Image source={props.logotipo} style={styles.logotipo} />
        <View style={styles.textos}>
            <Text style={styles.nome}>{props.nome}</Text>
            <Text style={styles.endereco}>{props.endereco}</Text>
        </View>
        <TouchableOpacity>
            <Image source={icons.favoritoFull} style={styles.favorito} />
        </TouchableOpacity>
    </View>
}

export default Restaurante;