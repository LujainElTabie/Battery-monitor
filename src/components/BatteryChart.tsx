import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import mockData from "../mockData/backend-response.json";
import { ChargingState, ChartData } from "../types/types";

type BatteryChartProps = {
  title: string;
  transformData: (data: { chargingStates: ChargingState[] }) => ChartData;
  legend?: React.ReactNode;
};

const screenWidth = Dimensions.get("window").width;

const BatteryChart: React.FC<BatteryChartProps> = ({
  title,
  transformData,
  legend,
}) => {
  const chartData = transformData(mockData);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal={true}>
        <LineChart
          data={chartData}
          width={screenWidth * 3}
          height={250}
          chartConfig={{
            backgroundGradientFrom: "#3D4767",
            backgroundGradientTo: "#3D4767",
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 8,
            },
          }}
          bezier
          style={styles.chart}
        />
      </ScrollView>
      {legend && <View style={styles.legendContainer}>{legend}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3D4767",
    borderRadius: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
  },
  title: {
    color: "#FBFCFC",
    marginVertical: 24,
    fontSize: 18,
  },
  chart: {
    marginLeft: -24,
    borderRadius: 8,
  },
  legendContainer: {
    justifyContent: "center",
    marginBottom: 10,
  },
});

export default BatteryChart;
