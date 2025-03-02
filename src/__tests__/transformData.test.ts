import mockData from "../mockData/backend-response.json";
import { transformData, transformDataState } from "../utils/dataTransform";

describe("transformData functions", () => {
  it("should transform chargingStates into chart data with correct labels", () => {
    const result = transformData(mockData);

    expect(result.labels.length).toBe(mockData.chargingStates.length);
    expect(result.labels[mockData.chargingStates.length - 1]).toBe("Now");
    expect(result.datasets[0].data.length).toBe(mockData.chargingStates.length);
  });

  it("should transform chargingStates into battery state data", () => {
    const result = transformDataState(mockData);

    expect(result.labels.length).toBe(mockData.chargingStates.length);
    expect(result.labels[mockData.chargingStates.length - 1]).toBe("Now");
    expect(result.datasets[0].data.length).toBe(mockData.chargingStates.length);
  });
});
