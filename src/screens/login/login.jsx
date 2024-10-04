import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./login.style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx";
import { useState } from "react";

function Login(props) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function ProcessarLogin() {
        console.log(email, senha);
    }

    return <View style={styles.container}>
        <Header texto={email} />

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="E-mail"
                    onChangeText={(texto) => setEmail(texto)}
                    value={email} />
            </View>

            <View style={styles.form}>
                <TextBox label="Senha" isPassword={true}
                    onChangeText={(texto) => setSenha(texto)}
                    value={senha} />
            </View>

            <View style={styles.form}>
                <Button texto="Acessar" onPress={ProcessarLogin} />
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity onPress={() => props.navigation.navigate("registro")}>
                <Text style={styles.footerText}>Criar minha conta.</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Login;