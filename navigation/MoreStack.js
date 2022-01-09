import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import More from "../Screens/More";
import MoreDetail from "../Screens/MoreDetail";
const Stack = createNativeStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator initialRouteName="More">
      <Stack.Screen name="More" component={More} />
      <Stack.Screen name="MoreDetail" component={MoreDetail} />
    </Stack.Navigator>
  );
}

export default MoreStack;
