import axios from "axios";

export const fetchData = async () => {
  try {
    // const { data } = await axios.get('https://covid-19india-api.herokuapp.com/v2.0/country_data');
    const { data } = await axios.get(
      "https://api.covid19api.com/total/country/india"
    );

    const slicedData = data.slice(-1);

    const active_rate = (
      (slicedData[0].Active / slicedData[0].Confirmed) *
      100
    ).toFixed(0);

    const recovered_rate = (
      (slicedData[0].Recovered / slicedData[0].Confirmed) *
      100
    ).toFixed(0);

    const death_rate = (
      (slicedData[0].Deaths / slicedData[0].Confirmed) *
      100
    ).toFixed(0);

    const modifiedData = {
      confirmed_cases: slicedData[0].Confirmed,
      active_cases: slicedData[0].Active,
      recovered_cases: slicedData[0].Recovered,
      death_cases: slicedData[0].Deaths,
      last_updated: slicedData[0].Date,

      active_rate: active_rate,
      recovered_rate: recovered_rate,
      death_rate: death_rate,
    };

    console.log(modifiedData);

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStateData = async () => {
  try {
    const { data } = await axios.get(
      "https://api.covidindiatracker.com/state_data.json"
    );

    const modifiedData = data.map((stateData) => ({
      state: stateData.state,
      active: stateData.active,
      confirmed: stateData.confirmed,
      recovered: stateData.recovered,
      deaths: stateData.deaths,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {
      data: { cases_time_series },
    } = await axios.get("https://api.covid19india.org/data.json");

    const slicedData = cases_time_series.slice(-7);

    const modifiedData = slicedData.map((dailyData) => ({
      dailyconfirmed: dailyData.dailyconfirmed,
      dailydeceased: dailyData.dailydeceased,
      dailyrecovered: dailyData.dailyrecovered,
      date: dailyData.date,
    }));

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
