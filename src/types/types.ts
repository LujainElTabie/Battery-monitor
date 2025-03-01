export type ChargingState = {
  date: string;
  chargingLevel: number;
  internalEventId: number;
};

export type ChartData = {
  labels: string[];
  datasets: {
    data: number[];
    color: (opacity?: number) => string;
    strokeWidth: number;
  }[];
};
