// QR añadir

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import QRCode from 'react-native-qrcode-svg';

export default function QR({ navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
	        <Text style={styles.backButtonText}>↩︎</Text>
        </TouchableOpacity>

        <Text style={styles.txt_1}>Bring the device closer</Text>
        <Text style={styles.txt_2}>to scan QR code</Text>
        
        <Text style={styles.txt_3}>My QR</Text>
          <View style={styles.icon_1}>
            <MaterialCommunityIcons name="qrcode-scan" size={200} color="white" />
          </View>
          <View style={styles.qr}>
            <QRCode 
              value="Texto o URL estática aquí" 
              size={150} 
              backgroundColor="white"
            />
          </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('QR_Scanner')}>
            <View style={styles.icon_2}>
              <Feather name="arrow-right" size={24} color="#001b48"/>
            </View>
            <Text style={styles.text_button}>Start</Text>
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
    backgroundColor: "#02457a",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 70,
    right: 15,
    backgroundColor: "#02457a",
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
    marginTop: 120,
    fontSize: 15,
    fontWeight: "bold",
    color: "#ffffff",
  },
  txt_2: {
    fontSize:15,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 100,
  },
  txt_3: {
    position: "absolute",
    top: 270,
    fontSize:25,
    fontWeight: "bold",
    color: "#ffffff",
    textDecorationLine: "underline",
  },
  icon_1: {
    position: "absolute",
    bottom:245,
    alignItems: "center",
    width: "100%",
  },
  qr: {
    marginTop: 25,  
  },
  button: {
    marginTop: 110,
    backgroundColor: "#ffffff",
    alignItems: "center",
    borderRadius: 25,
    width: "120%",
    padding: 15,
    marginBottom: 20,
  },
  icon_2: {
    position: "absolute",
    top: 18,
    right: 90,
  },
  text_button: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#001b48",
    textDecorationLine: "underline",
  },
});