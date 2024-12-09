import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";

export default function Menu({ navigation }) {
  return (
    <View style={styles.container}>

        <Text style={styles.txt_1}>Banca</Text>
        <Text style={styles.txt_2}>móvil</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text_button}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.text_button}>Log in</Text>
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
  txt_1: {
    marginTop: 100,
    marginBottom: -32,
    fontSize: 80,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    marginStart: -45,
    fontSize:70,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 120,
  },
  button: {
    marginTop: -25,
    borderWidth: 2,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 45,
    
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
  },
});
