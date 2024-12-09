//Validar cuenta mediante el boton de Log in, si no es correcto dejar un mensaje, y si es dejar pasar a la screen "Home"

import React, { useState } from "react";
import { Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar, Alert } from "react-native";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("https://api-bancamovil-production.up.railway.app/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();

      if (data.status === 200) {
        Alert.alert("Successful login", "Welcome to your account.");
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", data.msg);
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Login failed, try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Menu")}>
        <Text style={styles.backButtonText}>↩︎</Text>
      </TouchableOpacity>

      <Text style={styles.txt_1}>Banca</Text>
      <Text style={styles.txt_2}>móvil</Text>
      <Text style={styles.txt_3}>Welcome</Text>

      <View style={styles.border}>
        <Text style={styles.txt_4}>Log in to</Text>
        <Text style={styles.txt_5}>Your account</Text>

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

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.txt_6}>Don't have an account? Create one</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.text_button}>Log in</Text>
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
    padding: 40,
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
  },
  txt_3: {
    padding: 20,
    fontSize: 35,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_4: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#20385f",
  },
  txt_5: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#001b48",
    paddingBottom: 30,
  },
  txt_6: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
    color: "#405476",
    paddingBottom: 80,
    textDecorationLine: "underline",
  },
  input: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#f9f8f8",
    width: "100%",
    margin: 8,
  },
  button: {
    marginTop: -25,
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
