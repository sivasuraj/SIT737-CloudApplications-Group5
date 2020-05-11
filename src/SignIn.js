
import React, { useState, seEffect } from 'react';
import './App.css';
import UserDashboard from "./UserDashboard.js";


import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const App = () => {
    const [status, currentStatus] = useState(null);

    
    return (
        <div>
          {
          status !== null ?
            (
             <div>{status === "user" ? <UserDashboard /> : <App />}</div>
            )
            :
            (
                <Form className="App">
                <h1 className="Cen">Teamup USER LOGIN</h1>
                <h2 className="Cen">Enter Details</h2>
                <FormGroup>
                    <label className="Cen">Username</label>
                    <Input className='Username' type="Username" placeholder="Username"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">Password</label>
                    <Input className='Password' type="Password" placeholder="Password"/>
                </FormGroup>
                <div className="Left">
                    <a href="/forgot-password">Forgot Password</a>
                </div>
                <Button  onClick={() => currentStatus("user")} className="block">Log in</Button>
               </Form>
             )}
             </div>
    );
    
}
            
export default App;