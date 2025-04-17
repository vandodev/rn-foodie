import { View, Text, FlatList } from "react-native";
import { styles } from "./checkout.style.js";
import Produto from "../../components/produto/produto.jsx";
import Button from "../../components/button/button.jsx";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.js";


function Checkout(props) {

     const { itens, setItens, entrega, empresa, subtotal,
            total, CalculaValores } = useContext(CartContext);

    function ClickDelete(id_item) {
        const itensNovo = itens.filter((item) => {
            return item.id_item != id_item
        });

        setItens(itensNovo);
    }

    useEffect(() => {
        CalculaValores();       
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
            <Button texto="Finalizar Pedido" />
        </View>

    </View>
}

export default Checkout;