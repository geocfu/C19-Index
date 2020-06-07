import React from "react";
import { ProgressCircle } from "react-native-svg-charts";
import { useTheme } from "@ui-kitten/components";
const CircularProgress = (params) => {
  const theme = useTheme();
  return (
    <ProgressCircle
      style={{ height: 300, marginTop: -230 }}
      progress={params.progress}
      progressColor={params.color}
      backgroundColor={theme["color-basic-400"]}
      startAngle={-Math.PI * -1.5}
      endAngle={Math.PI * 0.5}
      strokeWidth={7}
      cornerRadius={0}
      data={[50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]}
    />
  );
};

export default CircularProgress;
