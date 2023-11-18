import React from "react";
import "./regstyle.css";
import { Link } from "react-router-dom";
export default function Login() {

const logusesr = () => {
  const hostelid=document.getElementById("hostel_id").value;
  const password=document.getElementById("password").value;
  fetch("http://127.0.0.1:5000/userlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hostelid: hostelid,
        password: password,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.key);
        sessionStorage.clear();
        if (data.status === 200) {
          sessionStorage.setItem("key",data.key);
          window.location.href = "/home";
        } else {
          alert("Invalid username or password ");
        }
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };



  return (
    <div className="body1">
      
      <section>
        {" "}
        
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>

            <div className="form">
              <div className="inputBox">
                <input type="text" id="hostel_id" required /> <i>Hostel_ID</i>
              </div>

              <div className="inputBox">
                <input type="password" id="password" required /> <i>Password</i>
              </div>
              <Link to='/reg'> 
                <div className="links">Signup</div>
              </Link>

              <div className="inputBox">
                <input type="submit" value="Login"  onClick={logusesr}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
