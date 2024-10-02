import { Image, Text } from 'react-native';
import { styles } from "./style.js";
import Button from "./src/components/button/button.jsx";
// import icons from "./src/constants/icons.js"

export default function App() {

  return (<>
    <Text style={styles.textos}>Hello World</Text>
    {/* <Image style={styles.imagem} source={icons.remove} /> */}
    <Button  texto="Acessar"/>
  </>
  );
}
