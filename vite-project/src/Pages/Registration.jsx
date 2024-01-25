import React from 'react'
import Navbar from '../Components/Navbar'

const Registration = () => {
  const initState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const alertState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
  };
  const focusState = {
    firstName: false,
    lastName: false,
    email: false,
    contact: false,
  };

  const [formdata, setFormdata] = React.useState(initState);
  const [alert, setAlert] = React.useState(alertState);
  const [focus, setFocus] = React.useState(focusState);
  const [registationSuccess, setRegistrationSuccess] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormdata((prevData) => ({ ...prevData, [name]: value }));
  }
  function handleFocus(name) {
    setFocus((prevFocusData) => ({ ...prevFocusData, [name]: true }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    let messageBox = {};

    if (formdata.firstName === "") {
      messageBox.firstName = "Please Enter your first Name";
    } 
    else {
      messageBox.firstName = "";
    }

    if (formdata.lastName === "") {
        messageBox.lastName = "Please Enter your last Name";
    } 
    else {
        messageBox.lastName = "";
    }

    if (formdata.email === "") {
        messageBox.email = "Please Enter your email";
    } 
    else {
        messageBox.email = "";
    }

    if (formdata.contact === "") {
        messageBox.contact = "Please Enter your Contact number";
    } 
    else {
        messageBox.contact = "";
    }

    setAlert(messageBox);
    if(messageBox.firstName=='' && messageBox.lastName=="" && messageBox.email==''&& messageBox.contact==''){
        setRegistrationSuccess(true)
    }
  }

  return (
    <>
      <div>
        <Navbar/>
        <h1 style={{textAlign:"center"}}>Registration Form</h1>
      </div>

      <div style={{ textAlign: "center", marginTop: "50px", backgroundColor:"black", width:"400px", height:"400px", marginLeft:"400px" }}>
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto", height:"400px", paddingTop:"50px"}}>
          <label htmlFor="" style={{ display: "block", marginBottom: "10px", height:"50px"}}>
            <input
              type="text"
              name="firstName"
              value={formdata.firstName}
              onChange={handleChange}
              onFocus={() => handleFocus("firstName")}
              placeholder="Enter your first name"
              style={{ borderColor: focus.firstName ? "red" : "#ccc", width:"250px", height:"30px", textAlign:"center"}}/>

            <div style={{ color: "red", fontSize: "12px", marginTop: "5px"}}>{alert.firstName}</div>
          </label>

          <label htmlFor="" style={{ display: "block", marginBottom: "10px", height:"50px"}}>
            <input
              type="text"
              name="lastName"
              value={formdata.lastName}
              onChange={handleChange}
              onFocus={() => handleFocus("lastName")}
              placeholder="Enter your last name"
              style={{ borderColor: focus.lastName ? "red" : "#ccc", width:"250px", height:"30px", textAlign:"center"}}/>
            <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{alert.lastName}</div>
          </label>

          <label htmlFor="" style={{ display: "block", marginBottom: "10px", height:"50px"}}>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              placeholder="Enter your email"
              style={{ borderColor: focus.email ? "red" : "#ccc", width:"250px", height:"30px", textAlign:"center"}}/>
            <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{alert.email}</div>
          </label>

          <label htmlFor="" style={{ display: "block", marginBottom: "10px", height:"50px"}}>
            <input
              type="tel"
              name="contact"
              value={formdata.contact}
              onChange={handleChange}
              onFocus={() => handleFocus("contact")}
              placeholder="Enter your conatct number"
              style={{ borderColor: focus.contact ? "red" : "#ccc", width:"250px", height:"30px", textAlign:"center"}}/>
            <div style={{ color: "red", fontSize: "12px", marginTop: "5px" }}>{alert.contact}</div>
          </label>

          <button style={{ backgroundColor: "#4CAF50", color: "white", padding: "10px", cursor: "pointer", border: "none", width: "200px", marginTop:"10px" }}>Register</button>
        </form>

        <div >
          {registationSuccess && (<div style={{ color: "green", fontSize: "18px" }}>Registration Successfull !!</div>)}
        </div>

      </div>

    </>
  );
};


export default Registration