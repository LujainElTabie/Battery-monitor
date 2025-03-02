import { render } from "@testing-library/react-native";
import React from "react";
import BatteryScreen from "../screens/BatteryScreen";

describe("BatteryScreen Component", () => {
  it("renders battery monitor screen correctly", () => {
    const { getByText } = render(<BatteryScreen />);

    expect(getByText("Battery Monitor")).toBeTruthy();
    expect(getByText("Battery State")).toBeTruthy();
    expect(getByText("Charging State")).toBeTruthy();
  });
});
