import React from "react";
import {
  VictoryChart,
  VictoryGroup,
  VictoryPolarAxis,
  VictoryLabel,
  VictoryTheme,
  VictoryArea
} from "victory-native";

import {
  useTheme,
} from "@ui-kitten/components";

//@refresh reset
const RadarChart = (props) => {
  const theme = useTheme();

  return (
    <VictoryChart polar
      theme={ VictoryTheme.material }
      domain={ { y: [0, 1] } }
    >
      <VictoryGroup
        style={ {
          data: { fillOpacity: 0.45, strokeWidth: 2.1, },
        } }
        colorScale={ [theme["color-primary-default"]] }
      >
        {
          props.data.map((data, i) => {
            return <VictoryArea key={ i } data={ data } />;
          })
        }
      </VictoryGroup>
      {
        Object.keys(props.maxima).map((key, i) => {
          if (i === 0) {
            return (
              <VictoryPolarAxis dependentAxis
                key={ i }
                style={ {
                  axisLabel: { padding: 30 },
                  axis: { stroke: "none" },
                  grid: { stroke: props.color, strokeWidth: 0.5, opacity: 0.5 },
                } }
                tickLabelComponent={
                  <VictoryLabel labelPlacement="vertical" />
                }
                axisLabelComponent={ <VictoryLabel style={ { fill: props.color } } /> }
                label={ key }
                labelPlacement="vertical"
                axisValue={ i + 1 }
                // tickFormat={ (t) => Math.ceil(t * 10) }
                tickFormat={ () => "" }

              />
            );
          } else {
            return (
              <VictoryPolarAxis dependentAxis
                key={ i }
                style={ {
                  axisLabel: { padding: 30, },
                  axis: { stroke: "none" },
                  grid: { stroke: props.color, strokeWidth: 0.5, opacity: 0.5 },
                } }
                tickLabelComponent={
                  <VictoryLabel labelPlacement="vertical" />
                }
                axisLabelComponent={ <VictoryLabel style={ { fill: props.color } } /> }
                label={ key }
                labelPlacement="vertical"
                axisValue={ i + 1 }
                tickFormat={ () => "" }
              />
            );
          }
        })
      }
      <VictoryPolarAxis
        labelPlacement="vertical"
        tickFormat={ () => "" }
        style={ {
          axis: { stroke: "none", },
          grid: { stroke: props.color, opacity: 0.5 },

        } }
      />
    </VictoryChart>
  );
}

export default RadarChart;