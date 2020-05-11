
import React, { useState, seEffect } from 'react';
import './App.css';
import App from "./App.js";



import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const SignUp = () => {
    const [status, currentStatus] = useState(null);

    
    return (
        <div>
          {
          status !== null ?
            (
             <div>{status === "user" ? <App /> : <SignUp />}</div>
            )
            :
            (
                <Form className="App">
                <h1 className="Cen">TeamUp Registration</h1>
                <h2 className="Cen">Enter Details</h2>
                <FormGroup>
                    <label className="Cen">Email</label>
                    <Input className='Username' type="Email" placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">FirstName</label>
                    <Input className='Username' type="FirstName" placeholder="FirstName"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">LastName</label>
                    <Input className='Username' type="LastName" placeholder="LastName"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">PhoneNumber</label>
                    <Input className='Username' type="PhoneNumber" placeholder="PhoneNumber"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">Password</label>
                    <Input className='Password' type="Password" placeholder="Password"/>
                </FormGroup>
                
                <Button  onClick={() => currentStatus("user")} className="block">Log in</Button>
               </Form>
             )}
             </div>
    );
    
}
            
export default SignUp;