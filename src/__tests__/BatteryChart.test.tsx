import { render } from "@testing-library/react-native";
import React from "react";
import BatteryChart from "../components/BatteryChart";
import { transformData } from "../utils/dataTransform";

describe("BatteryChart Component", () => {
  it("renders correctly with title", () => {
    const { getByText } = render(
      <BatteryChart title="Test Chart" transformData={transformData} />
    );

    expect(getByText("Test Chart")).toBeTruthy();
  });
});
