//Añadir cuenta en la base de datos, verificar si añadio todo y enviar y dar como respuesta en caso de haberla creado que la cuenta ha sido registrada

import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar, Alert } from "react-native";

export default function Register({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("https://api-bancamovil-production.up.railway.app/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.status === 200) {
        Alert.alert("Successful registration", "Your account was created.");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.msg);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Your account could not be created, try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Banca</Text>
      <Text style={styles.txt_2}>móvil</Text>

      <View style={styles.border}>
        <Text style={styles.txt_3}>Sign-up</Text>

        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#abb3c1"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last name"
          placeholderTextColor="#abb3c1"
          value={lastName}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#abb3c1"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#abb3c1"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.text_button}>Register</Text>
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
  border: {
    flex: 1,
    alignItems: "center",
    borderColor: "#ff3030",
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
    backgroundColor: "#ffffff",
    width: "170%",
    marginBottom: "-50%",
    padding: 20,
  },
  txt_1: {
    marginBottom: -32,
    fontSize: 70,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    marginStart: -45,
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 25,
  },
  txt_3: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#011c49",
    paddingBottom: 35,
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f9f8f8",
    width: "100%",
    margin: 12,
  },
  button: {
    marginTop: "20%",
    borderWidth: 2,
    backgroundColor: "#001b48",
    alignItems: "center",
    borderRadius: 25,
    width: "90%",
    padding: 15,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
