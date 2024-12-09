import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRGenerator = ({ value }) => {
  return (
    <View style={styles.container}>
      <QRCode
        value={"https://api-bancamovil-production.up.railway.app/transfer"} 
        size={150}
        backgroundColor="white"
        color="black"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default QRGenerator;