// En "Name" debe de ir el nombre del usuario, junto con la fecha de la ultima transaccion en "Last login", el dinero debe ser basado en lo que hay en la base de datos

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
        <Entypo name="log-out" size={24} color="#ffffff" />
      </TouchableOpacity> 

      <Text style={styles.txt_1}>Hello</Text>
      <Text style={styles.txt_2}>Name</Text>
      <Text style={styles.txt_3}>Last login:</Text>
      <Text style={styles.txt_4}>11.11.2024 11.11.11 Via Mobile</Text>

      <View style={styles.border}>
        <View style={styles.icon_1}>
          <Entypo name="wallet" size={50} color="#001b48"/>
        </View>
        <Text style={styles.txt_5}>Available Balance</Text>
        <Text style={styles.txt_6}>$200,000 MXN</Text>
      </View>

      <View style={styles.button_container}>
        <View style={styles.row_container}>
          <TouchableOpacity style={styles.button_1} onPress={() => navigation.navigate('QR_Scanner')}>
            <View style={styles.icon_2}>
              <Feather name="arrow-up" size={20} color="black"/>
            </View>
            <Text style={styles.text_button}>Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_2} onPress={() => navigation.navigate('QR')}>
            <View style={styles.icon_3}>
              <MaterialCommunityIcons name="qrcode-scan" size={20} color="black"/> 
            </View> 
            <Text style={styles.text_button}>QR Scanner</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button_3} onPress={() => navigation.navigate('QR')}>
          <View style={styles.icon_4}>
            <MaterialCommunityIcons name="account-details" size={24} color="black"/>
          </View> 
          <Text style={styles.text_button}>Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.border_2}>
        <Text style={styles.txt_7}>Transactions</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Transactions')}>
          <View style={styles.icon_5}>
            <Feather name="arrow-up" size={20} color="black"/>
          </View>
          <Text style={styles.txt_8}>See all</Text>
        </TouchableOpacity>
        
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}
//CSS
const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    backgroundColor: "#001b48",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 5,
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
    marginTop: 50,
    marginBottom: -6,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize: 25,
    color: "#ffffff",
  },
  txt_3: {
    marginTop: 20,
    fontSize: 15,
    color: "#ffffff",
  },
  txt_4: {
    fontSize: 15,
    color: "#ffffff",
    marginBottom: 80,
  },
  border: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "110%",
    borderRadius: 10,
    marginBottom: 270,
  },
  icon_1: {
    position: "absolute",
    top: 25,
    left: 15,
  },
  txt_5: {
    fontSize: 16,
    color: "#cacaca",
    marginTop: 12,
    marginStart: -45,
  },
  txt_6: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 36,
    marginTop: -5,
    marginStart: 55,
  },
  button_container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row_container: {
    position: "absolute",
    bottom: 250,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button_1: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginRight:5,
  },
  icon_2: {
    position: "absolute",
    top: 10,
    left: 25,
  },
  button_2: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
    marginLeft:5,
  },
  icon_3: {
    position: "absolute",
    top: 10,
    left: 16,
  },
  button_3: {
    bottom: 190,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 10,
    width: 150,
    padding: 10,
  },
  icon_4: {
    position: "absolute",
    top: 8,
    left: 25,
  },
  text_button: {
    marginLeft: 20,
    fontSize:15,
    fontWeight: "bold",
    color:"#000000",
    textDecorationLine: "underline",
  },
  border_2: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    width: "140%",
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    padding: 20,
    marginBottom: -40,
  },
  txt_7: {
    fontSize: 25,
    color: "#001b48",
    fontWeight: "bold",
  },
  icon_5: {
    position: "absolute",
    top: 0,
    left: -5,
  },
  txt_8: {
    marginLeft:20,
    fontSize: 15,
    color: "#001b48",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
});