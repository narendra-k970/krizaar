import React from "react";
import Countdown from "react-countdown";

const CountdownTimer = () => {
  const endDate = new Date("2024-06-10T00:00:00");

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Offer Ended!</span>;
    } else {
      return (
        <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
          <h2 style={{ fontSize: "28px", padding: "34px", fontWeight: 700 }}>
            Special offers <br />
            up to <span style={{ color: "#C22D57" }}>50% </span>
            off
          </h2>
          <div
            style={{
              background: "#C22D57",
              padding: "35px",
              borderRadius: "5px",
            }}
          >
            <h3
              style={{ fontSize: "28px", color: "#fff", paddingBottom: "10px" }}
            >
              Harry up! offer ends in
            </h3>
            <div
              style={{ display: "flex", justifyContent: "center", gap: "10px" }}
            >
              <div
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div>{days}</div>
                <div>DAYS</div>
              </div>
              <div
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div>{hours}</div>
                <div>HOURS</div>
              </div>
              <div
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div>{minutes}</div>
                <div>MIN</div>
              </div>
              <div
                style={{
                  background: "#fff",
                  color: "#000",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <div>{seconds}</div>
                <div>SEC</div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return <Countdown date={endDate} renderer={renderer} />;
};

export default CountdownTimer;
