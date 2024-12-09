// Validar si es correcto, cantidad enviada programar con la base de datos, mostrar en transactions el recibo

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';

export default function QR_Vaucher({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.icon_1}>
          <FontAwesome5 name="money-bill" size={50} color="white"/>
        </View>
        <Text style={styles.txt_1}>You have received</Text>
        <Text style={styles.txt_2}>$1000.00</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
          <Text style={styles.txt_3}>See receipt</Text>
        </TouchableOpacity>
        

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <View style={styles.icon_2}>
            <Feather name="arrow-left" size={24} color="#001b48"/>
          </View>
          <Text style={styles.text_button}>Go back</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
    );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    backgroundColor: "#001b48",
    alignItems: "center",
  },
  icon_1: {
    position: "absolute",
    top: 270,
  },
  icon_2: {
    position: "absolute",
    top: 18,
    left: 70,
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#001b48",
    borderRadius: 5,
    width:"20%",
  },
  backButtonText: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,
  },
  txt_1: {
    marginTop: 250,
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
    marginTop: 5,
    marginBottom: 200,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 80,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
