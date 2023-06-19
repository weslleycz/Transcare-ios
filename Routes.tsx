import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { Fragment } from "react";
import { StackNavigator } from "./src/navigato/StackNavigator";

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <>
      <Fragment>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Start" component={StackNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </Fragment>
    </>
  );
};