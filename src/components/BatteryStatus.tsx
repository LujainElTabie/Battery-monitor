import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChargingState } from "../types/types";

type BatteryStatusProps = {
  chargingStates: ChargingState[];
};

const BatteryStatus: React.FC<BatteryStatusProps> = ({ chargingStates }) => {
  if (!chargingStates || chargingStates.length === 0) {
    return <Text style={styles.text}>No data available</Text>;
  }

  const latestEntry = chargingStates[chargingStates.length - 1];
  const previousEntry =
    chargingStates.length > 1
      ? chargingStates[chargingStates.length - 2]
      : null;

  const isCharging =
    !previousEntry || latestEntry.chargingLevel >= previousEntry.chargingLevel;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Battery Status</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.batteryLevel}>{latestEntry.chargingLevel}%</Text>
        <Text
          style={[styles.status, { color: isCharging ? "#22CAEC" : "#FF6384" }]}
        >
          {isCharging ? "Charging" : "Discharging"}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1E2A47",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    color: "#FBFCFC",
    marginBottom: 8,
  },
  statusContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  batteryLevel: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FBFCFC",
    marginRight: 10,
  },
  status: {
    fontSize: 16,
  },
  text: {
    color: "#FBFCFC",
    textAlign: "center",
  },
});

export default BatteryStatus;
