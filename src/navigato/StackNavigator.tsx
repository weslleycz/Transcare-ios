import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Login } from "../screens/Login";
import { RedefinePassword } from "../screens/RedefinePassword";
import { Register } from "../screens/Register";
import { Small } from "../screens/Small";
import { Splash } from "../screens/Splash";
import { Quiz } from "../screens/Quiz";
import { Home } from "../screens/Home";

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Small" component={Small} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="RedefinePassword" component={RedefinePassword} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
