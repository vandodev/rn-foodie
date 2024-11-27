import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./categorias.style.js";

function Categorias(props) {
    return <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {
                props.dados.map((categoria, index) => {
                    return <View key={index} style={styles.categoria}>
                        <TouchableOpacity
                            onPress={() => props.onClick(categoria.id_categoria)}>
                            <Image style={styles.icone} source={{ uri: categoria.icone }} />
                            <Text style={styles.descricao}>{categoria.categoria}</Text>
                        </TouchableOpacity>
                    </View>
                })
            }
        </ScrollView>
    </View>
}

export default Categorias;