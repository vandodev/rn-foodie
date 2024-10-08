import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Principal from "./screens/principal/principal.jsx";
import Cardapio from "./screens/cardapio/cardapio.jsx"
import Busca from "./screens/busca/busca.jsx";
import DetalheProduto from "./screens/detalhe-produto/detalhe-produto.jsx";
import DetalhePedido from "./screens/detalhe-pedido/detalhe-pedido.jsx";

const Stack = createNativeStackNavigator();

function RoutesAuth() {
    return <NavigationContainer>

        <Stack.Navigator>

            <Stack.Screen name="detalhe-pedido" component={DetalhePedido} options={{
                headerShown: false
            }} />

            <Stack.Screen name="detalhe-produto" component={DetalheProduto} options={{
                headerShown: false
            }} />

            <Stack.Screen name="principal" component={Principal} options={{
                headerShown: false
            }} />

            <Stack.Screen name="cardapio" component={Cardapio} options={{
                headerShown: false
            }} />

            <Stack.Screen name="busca" component={Busca} options={{
                headerShown: false
            }} />
        </Stack.Navigator>

    </NavigationContainer>
}

export default RoutesAuth;