// QR añadir

import { Text, TouchableOpacity, View, StyleSheet, StatusBar} from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import QRCode from 'react-native-qrcode-svg';
import React, { useState, useEffect } from "react";
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import { Image } from "react-native";

export default function QR({ navigation }) {
  const [qrData, setQrData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQrData = async () => {
      try {
        const accountId = await AsyncStorage.getItem('accountId');
        if (!accountId) {
          console.log("Error: Account ID not found.");
          return;
        }

        const response = await fetch("https://api-bancamovil-production.up.railway.app/qr_codes", {
          method: "GET",
          headers: {
            "account_id": accountId, // Pasamos el account_id
          },
        });

        const data = await response.json();

        if (data.status === 200) {
          setQrData(data.qr_data);
        } else {
          console.log('Error fetching qr_data:', data.msg);
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQrData();
  }, []);


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
        {loading ? (
          <Text style={styles.errorText}>Loading QR...</Text>
        ) : qrData ? (
          <View>
            <Image
              source={{ uri: qrData.image_base64 }} //
              style={{ width: 150, height: 150 }}
            />
            <Text style={styles.errorText}>QR ID: {qrData.qr_id}</Text>
          </View>
        ) : (
          <Text style={styles.errorText}>Error loading QR data</Text>
        )}
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