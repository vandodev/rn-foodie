import { Image, View, Text, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./aba-home.style.js";
import icons from "../../constants/icons.js";
import { SafeAreaView } from "react-native-safe-area-context";
import TextBox from "../../components/textbox/textbox.jsx";
import { useState } from "react";
import Categorias from "../../components/categorias/categorias.jsx";
import { categorias, banners, restaurantes } from "../../constants/dados.js";
import Banners from "../../components/banners/banners.jsx";
import Restaurante from "../../components/restaurante/restaurante.jsx";

function AbaHome(props) {

    function OpenCardapio() {
        props.navigation.navigate("cardapio");
    }

    const [busca, setBusca] = useState("");

    return <SafeAreaView style={styles.container}>
        <View style={styles.headerBar}>
            <Image source={icons.logo} style={styles.logo} />

            <TouchableOpacity onPress={() => props.navigation.navigate("checkout")}>
                <Image source={icons.cart} style={styles.cart} />
            </TouchableOpacity>
        </View>

        <View style={styles.busca}>
            <TextBox placeholder="O que vamos pedir hoje?"
                onChangeText={(texto) => setBusca(texto)}
                value={busca} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>

            <Categorias dados={categorias} />

            <Banners dados={banners} />

            {
                restaurantes.map((restaurante, index) => {
                    return <View key={index}>
                        <Restaurante logotipo={restaurante.logotipo}
                            nome={restaurante.nome}
                            endereco={restaurante.endereco}
                            icone={icons.favoritoFull}
                            onPress={OpenCardapio} />
                    </View>
                })
            }

        </ScrollView>

    </SafeAreaView>
}

export default AbaHome;