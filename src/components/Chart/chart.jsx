import axios from "axios";
import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";
import styles from "./chart.module.css";

const Charts = () => {
  const [DailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  });

  const lineChart = DailyData.length ? (
    <Line
      data={{
        labels: DailyData.map(({ date }) => date),
        dataset: [
          {
            data: DailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: DailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};
export default Charts;
