import React from "react";
import { ScrollView, Text, View } from "react-native";
import BatteryChart from "../components/BatteryChart";
import BatteryStatus from "../components/BatteryStatus";
import Legend from "../components/Legend";
import mockData from "../mockData/backend-response.json";
import { ChargingState, ChartData } from "../types/types";

const transformDataState = (data: {
  chargingStates: ChargingState[];
}): ChartData => {
  const latestTime = new Date(
    data.chargingStates[data.chargingStates.length - 1].date
  );
  return {
    labels: data.chargingStates.map((entry) => {
      const hoursDiff = Math.round(
        (new Date(entry.date).getTime() - latestTime.getTime()) / 3600000
      );
      return hoursDiff === 0 ? "Now" : hoursDiff.toString();
    }),
    datasets: [
      {
        data: data.chargingStates.map((entry) => entry.chargingLevel),
        color: () => "rgba(34, 202, 236, 1)",
        strokeWidth: 2,
      },
    ],
  };
};

const transformData = (data: {
  chargingStates: ChargingState[];
}): ChartData => {
  const labels: string[] = [];
  const chargingData: number[] = [];
  const dischargingData: number[] = [];

  const latestTime = new Date(
    data.chargingStates[data.chargingStates.length - 1].date
  ).getTime();

  data.chargingStates.forEach((entry, index, array) => {
    const hoursDiff = Math.round(
      (new Date(entry.date).getTime() - latestTime) / 3600000
    );
    labels.push(hoursDiff === 0 ? "Now" : hoursDiff.toString());

    if (index === 0 || entry.chargingLevel >= array[index - 1].chargingLevel) {
      chargingData.push(entry.chargingLevel);
      dischargingData.push(null as any);
    } else {
      chargingData.push(null as any);
      dischargingData.push(entry.chargingLevel);
    }
  });

  return {
    labels,
    datasets: [
      {
        data: chargingData,
        color: () => `rgba(34, 202, 236, 1)`,
        strokeWidth: 2,
      },
      {
        data: dischargingData,
        color: () => `rgba(255, 99, 132, 1)`,
        strokeWidth: 2,
      },
    ],
  };
};

function BatteryScreen() {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 48,
        paddingBottom: 16,
        backgroundColor: "#091434",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: 24,
          marginBottom: 24,
          color: "#FBFCFC",
        }}
      >
        Battery Monitor
      </Text>

      {/* Add BatteryStatus Component */}
      <BatteryStatus chargingStates={mockData.chargingStates} />

      <ScrollView>
        <BatteryChart
          transformData={transformDataState}
          title="Battery State"
        />
        <View style={{ marginTop: 24 }} />
        <BatteryChart
          transformData={transformData}
          title="Charging State"
          legend={
            <Legend
              items={[
                { label: "Charging", color: "rgba(34, 202, 236, 1)" },
                { label: "Discharging", color: "rgba(255, 99, 132, 1)" },
              ]}
            />
          }
        />
      </ScrollView>
    </View>
  );
}

export default BatteryScreen;
