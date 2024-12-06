import { createContext, useState } from "react";

const CartContext = createContext({});

const pedido = {
    vl_subtotal: 50,
    vl_taxa_entrega: 5,
    vl_total: 55,
    itens: [
        {
            id_produto: 1,
            id_empresa: 2,
            id_categoria: 1,
            nome: "Hot Dog Maximus Fomão",
            descricao: "Tradicional Fomao, 2 salsichas hot dog comum, milho, vinagrete, batata palha, maionese, purê, orégano, curry, parmesão, cheddar ou requeijão, pepperoni e marinara mexicana, e coberto por uma deliciosa crosta de parmesão.",
            icone: "https://static-images.ifood.com.br/image/upload/t_medium/pratos/cd1b9efa-c98d-4d0f-8c1a-0595beac2594/202108112007_P5N0_i.jpg",
            vl_produto: 14.9,
            vl_total: 14.9,
            ind_ativo: "S",
            qtd: 1
        },
        {
            id_produto: 5,
            id_empresa: 2,
            id_categoria: 2,
            nome: "Coca-Cola Lata",
            descricao: "Coca-cola lata 330ml trincando de gelada",
            icone: "https://static.ifood-static.com.br/image/upload/t_low/pratos/820af392-002c-47b1-bfae-d7ef31743c7f/202210200237_btcjxya1zoh.jpg",
            vl_produto: 8,
            vl_total: 16,
            ind_ativo: "S",
            qtd: 2
        }
    ]
};


function CartProvider(props) {

    const [cart, setCart] = useState(pedido);

    return <CartContext.Provider value={{ cart, setCart }}>
        {props.children}
    </CartContext.Provider>
}

export { CartProvider, CartContext };