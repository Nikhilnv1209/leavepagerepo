import React, { useEffect, useState } from "react";
import { pendingleaves } from "../constants/data.js";
import totalapplied from "../assets/Home/totalapplied.png";
import totalabsent from "../assets/Home/totalabsent.png";
import "../Styles/Homecard.css";

const HomeCards = () => {
  const [userdata, setUserdata] = useState();

  const getuser = async () => {
    try {
      await fetch("http://localhost:5000/user/one", {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        res.json().then((data) => {
          setUserdata(data);
        });
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useeffect");
    getuser();
    console.log(userdata);
  }, []);

  return (
    <div className="grid-container">
      {pendingleaves.map((item) => (
        <div key={item.id} className="card-container">
          <img src={item.imgsrc} alt="" className="card-image" />
          <div className="card-content">
            <h1 className="leave-cards">{item.count} day</h1>
            <p className="card-text">{item.type}</p>
          </div>
        </div>
      ))}
      <div className="card-container">
        <div className="card-content">
          <img src={totalapplied} alt="" />
          <h1 className="card-title">0 day</h1>
          <p className="card-text">Total Applied Leave</p>
        </div>
      </div>
      <div className="card-container">
        <div className="card-content">
          <img src={totalabsent} alt="" />
          <h1 className="card-title">0 day</h1>
          <p className="card-text">Total Absent + Penalty</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
