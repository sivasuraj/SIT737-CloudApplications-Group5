import React, { useState, seEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Label } from "reactstrap";
const mainDiv = {
  color: "white",
};

const App = () => {
  const [status, currentStatus] = useState(null);

  return (
    <div>
      {
      status !== null ?
      (
        <div>{status === "signin" ? <SignIn /> : <SignUp />}</div>
      ) 
      :
      (
        <div className = "App">
          <h1 className="App-header" style={mainDiv}>Welcome to TeamUp</h1>
          <p>Click below buttons to progress into respective pages</p>
          <Label className="pen">If you are a user click below button</Label>
          <button onClick={() => currentStatus("signin")} className="box"> Signin</button>
          <Label className="pen">If you are not a user click below button</Label>
          <button onClick={() => currentStatus("signup")} className="box"> Signup</button>
        </div>
      )}
    </div>
  );
  // return (
  //   <div>
  //     {status !== null ? (
  //       <div>{status == "option1" ? <Option1 /> : <Option2 />}</div>
  //     ) : (
  //       <div>
  //         <button onClick={() => currentStatus("option1")}> Option 1</button>
  //         <button onClick={() => currentStatus("option2")}> Option 2</button>
  //       </div>
  //     )}
  //   </div>
  // );

};



export default App;
