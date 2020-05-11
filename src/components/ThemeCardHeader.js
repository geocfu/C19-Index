import React from "react";
import { View } from "react-native";
import { Text } from "@ui-kitten/components";

import { ThemeContext } from "../hooks/theme-context";

const ThemeCardHeader = (props) => {
  const themeContext = React.useContext(ThemeContext);
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      {props.theme === "Light" && (
        <Text
          style={{
            color: "#222B45",
          }}
          category="h6"
        >
          {props.title}
        </Text>
      )}
      {themeContext.theme === "light" && props.theme === "Light" && (
        <Text appearance="hint">Active</Text>
      )}

      {props.theme === "Dark" && (
        <Text
          style={{
            color: "#FFFFFF",
          }}
          category="h6"
        >
          {props.title}
        </Text>
      )}
      {themeContext.theme === "dark" && props.theme === "Dark" && (
        <Text appearance="hint">Active</Text>
      )}
    </View>
  );
};
export default ThemeCardHeader;
