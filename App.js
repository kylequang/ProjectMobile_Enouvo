import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigation/BottomTab";
import MoreStack from "./navigation/MoreStack";
import Centres from "./Screens/Centres";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen component={BottomTab} name="BottomTab" />
        <Stack.Screen component={Centres} name="Centres" />
        <Stack.Screen component={MoreStack} name="MoreStack" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
