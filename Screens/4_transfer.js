// Validar el boton continue y hacer un contador de la cantidad de letras, 0/40

import { Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";


export default function Transfer({ navigation, route }) {
  const { qrId } = route.params;
  const [amount, setAmount] = useState("");
  const [concept, setConcept] = useState("");

  const handleContinue = () => {
    if (!amount || !concept) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    // Realiza el POST aquí
    fetch("https://api-bancamovil-production.up.railway.app/transfer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, concept, qr_id: qrId }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        Alert.alert("Success", "Transfer completed successfully", [
          {
            text: "OK",
            onPress: () => navigation.navigate("QR_Vaucher"), // Navegar aquí
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Error", "Something went wrong.");
      });
  };

  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.backButton} onPress={handleContinue}>
            <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Transfer</Text>
        <View style={styles.row_icons}>
          <FontAwesome5 name="money-bill" size={35} color="white"/>
          <View style={styles.icon_arrow_right}>
            <Feather name="arrow-right" size={35} color="white"/>
          </View>
          <FontAwesome5 name="money-check" size={35} color="white"/>
        </View>
        <Text style={styles.txt_2}>Amount</Text>

        <TextInput
            style={styles.input}
            placeholder="              $0 MXN"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
        ></TextInput>
        
        <Text style={styles.txt_3}>Reference</Text>

        <TextInput
            style={styles.input_2}
            placeholder="#000000"
            placeholderTextColor="#ffffff"
            keyboardType="numeric"
        ></TextInput>

        <Text style={styles.txt_4}>Concept</Text>

        <TextInput
            style={styles.input_2}
            placeholderTextColor="#ffffff"
            keyboardType="default"
        ></TextInput>

        <View style={styles.row_container}>
          <Text style={styles.txt_5}>You can write up to 40 characters</Text>
          <Text style={styles.txt_6}>0/40</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR_Vaucher')}>
            <Text style={styles.text_button}>Continue</Text>
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
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 50,
    right: 20,
    backgroundColor: "#001b48",
    borderRadius: 5,
    width: "20%",
  },
  backButtonText: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: -10,
  },
  txt_1: {
    marginTop: 10,
    marginBottom: 130,
    fontSize: 30,
    fontWeight: "bold",
    color: "#ffffff",
  },
  row_icons: {
    position: "absolute",
    top:170,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon_arrow_right: {
    marginLeft: 20,
    marginRight:20,
  },
  txt_2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 5,
  },
  txt_3: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -255,
  },
  txt_4: {
    fontSize: 16,
    color: "#ffffff",
    marginTop: 40,
    marginBottom: -10,
    marginStart: -260,
  },
  input: {
    fontSize: 30,
    fontWeight: "bold",
    width: "140%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
  },
  input_2: {
    paddingTop: 25,
    fontSize: 20,
    width: "140%",
    height: 60,
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    color: "#ffffff",
  },
  row_container: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt_5: {
    fontSize: 9,
    color: "#ffffff",
    marginEnd:95,
  },
  txt_6: {
    fontSize: 9,
    color: "#ffffff",
    marginStart: 75,
  },
  button: {
    marginTop: 85,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 55,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});
