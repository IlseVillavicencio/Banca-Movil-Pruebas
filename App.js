import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menu from './Screens/1_menu';
import Register from './Screens/1.1_register';
import Login from './Screens/1.2_login';
import Home from './Screens/2_home';
import Transactions from './Screens/2.1_transactions';
import QR from './Screens/3_qr';
import QR_Scanner from './Screens/3.1_qr_scanner';
import QR_Vaucher from './Screens/3.2_qr_vaucher';
import Transfer from './Screens/4_transfer';
import Transfer_Vaucher from './Screens/4.1_transfer_vaucher';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: false, 
        }}
      >
        <Stack.Screen name="Menu" component={Menu}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Transactions" component={Transactions}/>
        <Stack.Screen name="QR" component={QR}/>
        <Stack.Screen name="QR_Scanner" component={QR_Scanner}/>
        <Stack.Screen name="QR_Vaucher" component={QR_Vaucher}/>
        <Stack.Screen name="Transfer" component={Transfer}/>
        <Stack.Screen name="Transfer_Vaucher" component={Transfer_Vaucher}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
