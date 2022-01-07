import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './navigation/BottomTab';
import Centres from './Screens/Centres';
import More from './Screens/More';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomTab' screenOptions={{ headerShown: false }}>
        <Stack.Screen component={BottomTab} name='BottomTab' />
        <Stack.Screen component={Centres} name='Centres' />
        <Stack.Screen component={More} name='More' />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
