import { View, Image, Text } from "react-native";
import { styles } from "./pedido.style.js";

function Pedido(props) {
    return <View style={styles.pedido}>
        <Image source={props.logotipo} style={styles.logotipo} />

        <View style={styles.textos}>
            <Text style={styles.nome}>{props.nome}</Text>

            <View style={styles.containerValor}>
                <Text style={styles.valor}>
                    {
                        new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(props.valor)
                    }
                </Text>
                <Text style={styles.valor}>{props.dt_pedido}</Text>
            </View>
            <Text style={styles.status}>{props.status}</Text>
        </View>

    </View>
}

export default Pedido;