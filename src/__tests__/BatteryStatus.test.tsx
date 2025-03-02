import { render } from "@testing-library/react-native";
import React from "react";
import BatteryStatus from "../components/BatteryStatus";
import mockData from "../mockData/backend-response.json";

describe("BatteryStatus Component", () => {
  it("renders correctly with battery status", () => {
    const { getByText } = render(
      <BatteryStatus chargingStates={mockData.chargingStates} />
    );

    expect(getByText("Current Battery Status")).toBeTruthy();
    expect(
      getByText(
        `${
          mockData.chargingStates[mockData.chargingStates.length - 1]
            .chargingLevel
        }%`
      )
    ).toBeTruthy();
  });

  it("displays 'No data available' when chargingStates is empty", () => {
    const { getByText } = render(<BatteryStatus chargingStates={[]} />);
    expect(getByText("No data available")).toBeTruthy();
  });
});
