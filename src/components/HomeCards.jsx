import React, { useEffect, useState } from "react";
import { pendingleaves } from "../constants/data.js";
import totalapplied from "../assets/Home/totalapplied.png";
import totalabsent from "../assets/Home/totalabsent.png";
import "../Styles/Homecard.css";

const HomeCards = () => {
  const [userdata, setUserdata] = useState(null);
  const order = [
    "Sick_Leave_Pending",
    "Casual_Leave_Pending",
    "Paternity_Leave_Pending",
    "Social_Cause_Leave_Pending",
    "Anniversary_Leave_Pending",
    "Birthday_Leave_Pending",
    "Unpaid_Casual_Leave_Pending",
  ];

  const getuser = async () => {
    const response = await fetch("http://localhost:5000/user/one", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Error: " + response.status);
    }

    const data = await response.json();
    return data;
  };

  useEffect(() => {
    console.log("useeffect");

    const fetchData = async () => {
      try {
        const data = await getuser();
        setUserdata(() => ({ ...data.user }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(userdata);
  return (
    <div className="grid-container">
      {userdata ? (
        order.map((item, idx) => (
          <div key={idx} className="card-container">
            <img
              src={pendingleaves[idx].imgsrc}
              alt=""
              className="card-image"
            />
            <div className="card-content">
              <h1 className="leave-cards">{userdata[item]} day</h1>
              <p className="card-text">{pendingleaves[idx].type}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading user data...</p>
      )}

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
