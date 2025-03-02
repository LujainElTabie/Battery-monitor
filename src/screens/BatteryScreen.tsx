import React from "react";
import { ScrollView, Text, View } from "react-native";
import BatteryChart from "../components/BatteryChart";
import BatteryStatus from "../components/BatteryStatus";
import Legend from "../components/Legend";
import mockData from "../mockData/backend-response.json";
import { transformData, transformDataState } from "../utils/dataTransform";

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
