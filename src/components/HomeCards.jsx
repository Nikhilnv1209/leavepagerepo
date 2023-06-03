import React, { useEffect, useState } from "react";
import { pendingleaves } from "../constants/data.js";
import totalapplied from "../assets/Home/totalapplied.png";
import totalabsent from "../assets/Home/totalabsent.png";
import "../Styles/Homecard.css";

const HomeCards = () => {
  const [userdata, setUserdata] = useState(null);
  const order = [4, 2, 3, 5, 0, 1, 6];

  const getuser = async () => {
    const response = await fetch("http://localhost:5000/leave/record", {
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
    // console.log(data);
    return data;
  };

  useEffect(() => {
    // console.log("useeffect");

    const fetchData = async () => {
      try {
        const data = await getuser();
        setUserdata(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    // console.log(userdata);
  }, []);

  return (
    <div className="grid-container">
      {userdata ? (
        <>
          {order.map((item, idx) => (
            <div key={idx} className="card-container">
              <img
                src={pendingleaves[idx].imgsrc}
                alt=""
                className="card-image"
              />
              <div className="card-content">
                <h1 className="leave-cards">
                  {userdata.leaves[item].count} day
                </h1>
                <p className="card-text">{pendingleaves[idx].type}</p>
              </div>
            </div>
          ))}
          <div className="card-container">
            <div className="card-content">
              <img src={totalapplied} alt="" />
              <h1 className="card-title">{userdata.totalCount} days</h1>
              <p className="card-text">Total Applied Leave</p>
            </div>
          </div>
          <div className="card-container">
            <div className="card-content">
              <img src={totalabsent} alt="" />
              <h1 className="card-title">0days</h1>
              <p className="card-text">Total Absent + Penalty</p>
            </div>
          </div>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default HomeCards;
