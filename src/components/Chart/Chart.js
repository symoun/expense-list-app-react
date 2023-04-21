import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.dataPoints.map((entry) => (
        <ChartBar
          value={entry.value}
          maxValue={totalMaximum}
          label={entry.label}
          key={entry.label}
        />
      ))}
    </div>
  );
}
