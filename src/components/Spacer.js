import React from "react";
import { View } from "react-native";

const Spacer = (props) => {
  return <View style={{ marginTop: props.top, marginBottom: props.bottom }} />;
};

export default Spacer;
