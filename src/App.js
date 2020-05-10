import React from "react";
import { StatusBar } from "react-native";
//import AsyncStorage from "@react-native-community/async-storage";
import { AsyncStorage } from "react-native";

import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
// import { mapping, light, dark } from "@eva-design/eva";
import * as eva from "@eva-design/eva";

import { ThemeContext } from "./hooks/theme-context";
import useCachedResources from "./hooks/useCachedResources";
import AppNavigator from "./navigation/AppNavigator";

const statusBarColors = { light: "#FFFFFF", dark: "#222B45" };
const statusBarStyles = {
  light: "dark-content",
  dark: "light-content",
};

const App = () => {
  const isLoadingComplete = useCachedResources();

  const [theme, setTheme] = React.useState("light");

  const currentStatusBarColor = statusBarColors[theme];
  const currentStatusBarStyle = statusBarStyles[theme];

  React.useEffect(() => {
    AsyncStorage.getItem("@theme")
      .then((value) => {
        // If the saved theme is light,
        // its the same with the default theme.
        // So there is no need to do an extra
        // re-render
        // If the saved theme is dark,
        // load it from memory and apply it
        if (value === "dark") {
          setTheme(value);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    // Save the next theme to the storage because
    // the default theme is light and is already applied
    AsyncStorage.setItem("@theme", nextTheme)
      .then(() => {
        setTheme(nextTheme);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => {
        setTheme(nextTheme);
      });
  };

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <React.Fragment>
        <IconRegistry icons={EvaIconsPack} />
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <ApplicationProvider {...eva} theme={eva[theme]}>
            <StatusBar
              backgroundColor={statusBarColors[theme]}
              barStyle={statusBarStyles[theme]}
            />
            <AppNavigator />
          </ApplicationProvider>
        </ThemeContext.Provider>
      </React.Fragment>
    );
  }
};

export default App;
