import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {LaptopsList} from './screens/LaptopsList.js';

export default function App() {

  // Tag nuevo
  const StackLaptops = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackLaptops.Navigator>
        <StackLaptops.Screen name="LaptopsListNav"
        component={LaptopsList}/>
      </StackLaptops.Navigator>
    </NavigationContainer>
  );
}


