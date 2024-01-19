import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {ContactList} from './screens/ContacList.js';

export default function App() {

  // Tag nuevo
  const StackContacts = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackContacts.Navigator>
        <StackContacts.Screen name="ContacListNav"
        component={ContactList}/>
      </StackContacts.Navigator>
    </NavigationContainer>
  );
}


