import React from "react";
import { StyleSheet, Text, View } from "react-native";

type LegendItem = {
  label: string;
  color: string;
};

type LegendProps = {
  items: LegendItem[];
};

const Legend: React.FC<LegendProps> = ({ items }) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View key={index} style={styles.legendItem}>
          <View style={[styles.colorBox, { backgroundColor: item.color }]} />
          <Text style={styles.label}>{item.label}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  legendItem: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 8,
  },
  colorBox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 6,
  },
  label: {
    color: "#FBFCFC",
    fontSize: 14,
  },
});

export default Legend;
