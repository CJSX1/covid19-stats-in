import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { fetchDailyData } from "../../api";
import "./Charts.css";

const Charts = ({ data: { active_rate, recovered_rate, death_rate } }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };

    fetchApi();
  }, [setDailyData]);

  if (!active_rate) {
    return (
      <div className="row" className="text-center">
        <p>Loading Chart Data...</p>
      </div>
    );
  }

  const data = {
    labels: ["Active % ", "Recovered %", "Death %"],
    datasets: [
      {
        data: [active_rate, recovered_rate, death_rate],
        backgroundColor: ["#2196f3", "#81c784", "#e57373"],
      },
    ],
  };

  const barData = {
    labels: dailyData.map(({ date }) => date),
    datasets: [
      {
        label: "Daily Confirmed Cases",
        backgroundColor: "rgba(255,99,132)",
        borderColor: "rgba(255,99,132)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132)",
        hoverBorderColor: "rgba(255,99,132)",
        data: dailyData.map(({ dailyconfirmed }) => dailyconfirmed),
      },
    ],
  };

  return (
    <div className="">
      <div className="row">
        <div className="col s12 m6 l6">
          <div className="card lighten-2">
            <div className="card-content white-text">
              <Doughnut
                data={data}
                options={{
                  title: {
                    display: true,
                    text: "Overall Recovery Rate in India",
                  },
                }}
              />
            </div>
          </div>
        </div>
        <div className="col s12 m6 l6">
          <div className="card lighten-2">
            <div className="card-content white-text">
              <Bar
                data={barData}
                options={{
                  title: {
                    display: true,
                    text:
                      "Overall Daily Confirmed Cases in India (last 5 days)",
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
