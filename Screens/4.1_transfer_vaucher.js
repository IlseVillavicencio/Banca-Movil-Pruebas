// Depende de si la transacción realmente se realizo mostrar la confirmación o su rechazo y la cnatidad recibida, que se suma a la de la base de datos para aparecer en home

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

export default function Transfer_Vaucher({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <View style={styles.icon_1}>
          <AntDesign name="checkcircle" size={70} color="#001b48"/>
        </View>
        <Text style={styles.txt_1}>You have transferred</Text>
        <Text style={styles.txt_2}>$1000.00</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
          <Text style={styles.txt_3}>See receipt</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <View style={styles.icon_2}>
            <Feather name="arrow-left" size={24} color="#ffffff"/>
          </View>
          <Text style={styles.text_button}>Go back</Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>

    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 80,
    flex: 1,
    backgroundColor: "#001b48",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    right: 25,
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
  border: {
    alignItems: "center",
    borderColor: "#ffffff",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#ffffff",
    width: "170%",
    marginTop: 60,
    marginBottom: "-40%",
    padding: 20,
  },
  icon_1: {
    position: "absolute",
    top: 50,
  },
  txt_1: {
    marginTop: 150,
    fontSize: 25,
    fontWeight: "bold",
    color: "#001b48",
  },
  txt_2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#001b48",
  },
  txt_3: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#001b48",
    marginTop: 5,
    marginBottom: 220,
    textDecorationLine: "underline",
  },
  button: {
    backgroundColor: "#001b48",
    alignItems: "center",
    borderRadius: 25,
    width: "85%",
    padding: 15,
    marginBottom: 80,
  },
  icon_2: {
    position: "absolute",
    top: 18,
    left: 80,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    textDecorationLine: "underline",
  },
});
