import React from 'react'
import {useState} from 'react'
import Datepicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Mess1.css'
const Request = ({ messMode }) => {
    const [date, setDate] = useState(new Date());
    const [message, setMessage] = useState('');
  
    const handleChange = (event) => {
      setMessage(event.target.value);
      
    };
    
    const submit = () => {
      fetch("https://hmms-backend.onrender.com/messreq", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "hostel_id":sessionStorage.getItem("key"),
        "messmode":messMode,
        "date":new Date(date).toLocaleDateString(),
        "days":message,
      }),
    }).then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (data.status === 200) {
        alert("Request submitted successfully");
      } else if (data.status === 410) {
        // show a alert
        alert("User already in messout");
      }
      else
      {
        alert("Please enter valid details");
      }
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
};


  return (
    <div className='reqbox'>
      
                    <h2>{messMode === 'MESSOUT' ? 'MESSOUT' : 'MESSIN'}</h2>
                    <p>NB : Please read the Guidelines before you submit the request
                    </p>
                    <div className='calender1'>
                        <h3>FROM:</h3>
                        <Datepicker className='from' selected={date} onChange={date => setDate(date)} required />

                    </div>
                    
                    
                    <div className='submit'>
                        <button onClick={submit}>SUBMIT</button>
                    </div>
                
    </div>
  )
}

export default Request
