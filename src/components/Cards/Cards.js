import React from "react";
import CountUp from "react-countup";
import "./Cards.css";

const Cards = ({
  data: {
    confirmed_cases,
    active_cases,
    recovered_cases,
    death_cases,
    last_updated,
  },
}) => {
  if (!confirmed_cases) {
    return "Loading...";
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m3 l3">
          <div className="card blue lighten-2">
            <div className="card-content black-text">
              <span className="card-title">
                <CountUp
                  start={0}
                  end={active_cases}
                  duration={2.5}
                  separator=","
                />
              </span>
              <p>Active Cases</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3 l3">
          <div className="card green lighten-2">
            <div className="card-content black-text">
              <span className="card-title">
                <CountUp
                  start={0}
                  end={recovered_cases}
                  duration={2.5}
                  separator=","
                />
              </span>
              <p>Recovered</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3 l3">
          <div className="card red lighten-2">
            <div className="card-content black-text">
              <span className="card-title">
                <CountUp
                  start={0}
                  end={death_cases}
                  duration={2.5}
                  separator=","
                />
              </span>
              <p>Death</p>
            </div>
          </div>
        </div>
        <div className="col s12 m3 l3">
          <div className="center-align">
            <p>Dashboard as on : {last_updated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
