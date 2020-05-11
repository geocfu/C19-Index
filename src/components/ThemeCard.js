import React from "react";
import { View } from "react-native";
import { Card } from "@ui-kitten/components";

import ThemeCardHeader from "./ThemeCardHeader";

const ThemeCard = (props) => {
  return (
    <React.Fragment>
      {props.title === "Light" && (
        <Card
          {...props}
          style={{
            backgroundColor: "#FFFFFF",
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
          appearance="filled"
        >
          <ThemeCardHeader theme="Light" title={props.title} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#F7F9FC",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#EDF1F7",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#1A2138",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#222B45",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#3366FF",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
          </View>
        </Card>
      )}

      {props.title === "Dark" && (
        <Card
          {...props}
          style={{
            backgroundColor: "#222B45",
            marginTop: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.37,
            shadowRadius: 7.49,

            elevation: 12,
          }}
          appearance="filled"
        >
          <ThemeCardHeader theme="Dark" title={props.title} />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#1A2138",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#151A30",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#F7F9FC",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#FFFFFF",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
            <View
              style={{
                backgroundColor: "#3366FF",
                width: 40,
                height: 40,
                borderRadius: 4,
                marginHorizontal: 2,
              }}
            />
          </View>
        </Card>
      )}
    </React.Fragment>
  );
};

export default ThemeCard;
