import * as React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import More from "../Screens/More";
import MoreDetail from "../Screens/MoreDetail";
const Stack = createNativeStackNavigator();

function MoreStack() {
  return (
    <Stack.Navigator
      initialRouteName="More"
      screenOptions={{
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "700",
          fontSize: 16,
        },
      }}
    >
      <Stack.Screen name="More" component={More} />
      <Stack.Screen
        options={{ title: "More" }}
        name="MoreDetail"
        component={MoreDetail}
      />
    </Stack.Navigator>
  );
}

export default MoreStack;
