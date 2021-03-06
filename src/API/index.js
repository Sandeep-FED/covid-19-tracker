import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

// API for chart

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((DailyData) => ({
      confirmed: DailyData.confirmed.total,
      deaths: DailyData.deaths.total,
      date: DailyData.date.report,
    }));

    return modifiedData;
  } catch (error) {}
};
