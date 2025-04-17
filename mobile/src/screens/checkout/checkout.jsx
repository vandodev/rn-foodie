import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { styles } from "./checkout.style.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.js";
import { useNavigation } from "@react-navigation/native";
import api from "../../constants/api.js";


function Checkout(props) {

    const nav = useNavigation();

    const { itens, setItens, entrega, empresa, subtotal,
        total, CalculaValores } = useContext(CartContext);

    function ClickDelete(id_item) {
        const itensNovo = itens.filter((item) => {
            return item.id_item != id_item
        });

        setItens(itensNovo);
    }

    function ClickLimpar() {
        setItens([]);
        props.navigation.goBack();
    }

     async function EnviarPedido() {
    
        try {

            const ped = {
                id_empresa: empresa,
                vl_subtotal: subtotal,
                vl_taxa_entrega: entrega,
                vl_total: total,
                itens: itens
            };

            const response = await api.post("/pedidos", ped);

            if (response.data) {
                ClickLimpar();
            }
        } catch (error) {
            if (error.response?.data.error)
                Alert.alert(error.response.data.error);
            else
                Alert.alert("Ocorreu um erro. Tente novamente mais tarde");
        }

    }

    useEffect(() => {
        CalculaValores();  

        nav.setOptions({
            headerRight: () => {
                return <TouchableOpacity onPress={ClickLimpar}>
                    <Text style={styles.btnLimpar}>Limpar</Text>
                </TouchableOpacity>
            }
        })    

    }, [])

    return <View style={styles.container}>

        <FlatList data={itens}
            keyExtractor={(item) => item.id_produto}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Produto key={item.id_item}
                    id_produto={item.id_produto}
                    foto={item.icone}
                    nome={item.nome}
                    descricao={item.descricao}
                    obs={item.obs}
                    valor={item.vl_total}
                    qtd={item.qtd}
                    id_item={item.id_item}
                    onClickDelete={ClickDelete}
                />
            }}
        />

        <View>
            <View style={styles.valores}>
                <Text style={styles.total}>Resumo dos Valores</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Subtotal</Text>
                <Text style={styles.valor}>
                {
                    new Intl.NumberFormat("pt-BR",
                        { style: "currency", currency: "BRL" }).format(subtotal)
                }
                </Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.valor}>Taxa de entrega</Text>
                <Text style={styles.valor}>{
                    new Intl.NumberFormat("pt-BR",
                        { style: "currency", currency: "BRL" }).format(entrega)
                }</Text>
            </View>

            <View style={styles.valores}>
                <Text style={styles.total}>Total</Text>
                <Text style={styles.total}>{
                    new Intl.NumberFormat("pt-BR",
                        { style: "currency", currency: "BRL" }).format(total)
                }</Text>
            </View>
        </View>

        <View style={styles.conatinerBtn}>
             <Button texto="Finalizar Pedido" onPress={EnviarPedido} />
        </View>

    </View>
}

export default Checkout;