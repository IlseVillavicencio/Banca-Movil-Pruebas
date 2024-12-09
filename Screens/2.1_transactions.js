// De acuerdo a las transiciones mostrar los movimientos y mostrar dinero actualizado de acuerdo a la base de datos

import React from "react";
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function Transactions({ navigation }) {
  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	      <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Transactions</Text>

      <View style={styles.border}>
        <View style={styles.icon_1}>
          <Entypo name="wallet" size={50} color="#001b48"/>
        </View>
        <Text style={styles.txt_2}>Available Balance</Text>
        <Text style={styles.txt_3}>$200,000 MXN</Text>
      </View>

      <View style={styles.historyContainer}>
        <View style={styles.icon_2}>
          <MaterialIcons name="history" size={24} color="#001b48"/>
        </View>
        <Text style={styles.historyText}>History</Text>
      </View>

      <View style={styles.transaction}>
        <View style={styles.icon_3}>
          <FontAwesome5 name="coins" size={24} color="#001b48"/>
        </View>  
        <Text style={styles.transactionTitle}>NETFLIX</Text>
        <Text style={styles.transactionPrice}>➚ $99.00</Text>
        <Text style={styles.transactionDate}>31.12.2024</Text>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

// CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001b48",
    padding: 20,
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
    marginTop: 75,
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  border: {
    marginTop: 30,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    padding: 20,
  },
  icon_1: {
    position: "absolute",
    top: 33,
    left: 22,
  },
  txt_2: {
    fontSize: 16,
    color: "#cacaca",
    marginStart: -45,
  },
  txt_3: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 36,
    marginTop: -5,
    marginStart: 60,
  },
  historyContainer: {
    marginTop: 20,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width:120,
  },
  icon_2: {
    position: "absolute",
    top: 9,
    left: 15,
  },
  historyText: {
    marginLeft: 25,
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 16,
  },
  transaction: {
    marginTop: 20,
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon_3: {
    position: "absolute",
    top: 15,
    left: 25,
  },
  transactionTitle: {
    color: "#001b48",
    fontWeight: "bold",
    fontSize: 18,
    marginStart: 50,
  },
  transactionPrice: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
  transactionDate: {
    fontSize: 14,
    color: "#001b48",
    fontWeight: "bold",
  },
});
