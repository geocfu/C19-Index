import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LinkingConfiguration from "../navigation/LinkingConfiguration";

import Home from "../screens/Home";
import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Settings" component={Settings} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer linking={LinkingConfiguration}>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
