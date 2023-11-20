import React from "react";
import "./dashboard.css";
import { useState ,useEffect} from "react";
import DashTile from "./DashTile";

export default function Dashboard() {
  const [list, setList] = useState([]);
  useEffect(() => {
    
  const getListBy = () => {
    fetch("https://hmms-backend.onrender.com/dash", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hostelid: sessionStorage.getItem("key"),
      }),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setList(data);
        
        if(data.length===0)
          sessionStorage.setItem("username","No Name");
        else
          sessionStorage.setItem("username",data[0][10]);
        
      });
    });
  };
  getListBy();
  }, []);
  return (
    <div className="dashboard">
      <div className="dash-div">
        College Details
        
        <DashTile title={"KTU ID"} value={list[0] ? list[0][0] : 'Loading...'} />

        <DashTile title={"Branch"} value={list[0] ? list[0][2] : 'Loading...'} />
        <DashTile title={"Semester"} value={list[0] ? list[0][3] : 'Loading...'} />
        <DashTile empty />
      </div>

      <div className="dash-div">
        Personal Details
        <DashTile title={"email"} value={list[0] ? list[0][4] : 'Loading...'} />
        <DashTile title={"phone number"} value={list[0] ? list[0][5] : 'Loading...'} />
        <DashTile title={"gender"} value={list[0] ? list[0][6] : 'Loading...'} />
        <DashTile title={"DOB"} value={list[0] ? new Date(list[0][7]).toLocaleDateString() : 'Loading...'} />

      </div>

      <div className="dash-div">
        Hostel Details
        <DashTile title={"Hostel ID"} value={list[0] ? list[0][1] : 'Loading...'} />
        <DashTile title={"Block Number"} value={list[0] ? list[0][8] : 'Loading...'}/>
        <DashTile title={"Room Number"} value={list[0] ? list[0][9] : 'Loading...'} />
        <DashTile empty />
      </div>
    </div>
  );
}
