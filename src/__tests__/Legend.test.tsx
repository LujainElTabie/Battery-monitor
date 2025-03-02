import { render } from "@testing-library/react-native";
import React from "react";
import Legend from "../components/Legend";

describe("Legend Component", () => {
  it("renders legend items correctly", () => {
    const legendItems = [
      { label: "Charging", color: "blue" },
      { label: "Discharging", color: "red" },
    ];

    const { getByText } = render(<Legend items={legendItems} />);

    expect(getByText("Charging")).toBeTruthy();
    expect(getByText("Discharging")).toBeTruthy();
  });
});
