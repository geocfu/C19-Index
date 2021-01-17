import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LinkingConfiguration from "../navigation/LinkingConfiguration";

import Home from "../screens/Home";
import Settings from "../screens/Settings";
import FormStep1 from "../screens/form/FormStep1";
import FormStep2 from "../screens/form/FormStep2";
import FormStep3 from "../screens/form/FormStep3";
import Results from "../screens/form/Results";
import FormStep4 from "../screens/form/FormStep4";
import FormStep5 from "../screens/form/FormStep5";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Home" component={ Home } />
    <Stack.Screen name="Settings" component={ Settings } />
    <Stack.Screen name="FormStep1" component={ FormStep1 } />
    <Stack.Screen name="FormStep2" component={ FormStep2 } />
    <Stack.Screen name="FormStep3" component={ FormStep3 } />
    <Stack.Screen name="FormStep4" component={ FormStep4 } />
    <Stack.Screen name="FormStep5" component={ FormStep5 } />
    <Stack.Screen name="Results" component={ Results } />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer linking={ LinkingConfiguration }>
    <HomeNavigator />
  </NavigationContainer>
);

export default AppNavigator;
