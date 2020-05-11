
import React, { useState, seEffect } from 'react';
import './App.css';

import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import UserDashboard from './UserDashboard.js';

const MyProfile = () => {
    const [status, currentStatus] = useState(null);

    
    return (
        <div>
          {
          status !== null ?
            (
             <div>{status === "update" ? <MyProfile /> : <UserDashboard />}</div>
            )
            :
            (
              <div>
                <Form className="App">
                <h1 className="Cen">My Profile</h1>
                <h2 className="Cen">Enter Details</h2>
                <FormGroup>
                    <label className="Cen">GroupNo</label>
                    <Input className='Username' type="GroupNo" placeholder="GroupNo"/>
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
                    <label className="Cen">Skillset</label>
                    <Input className='Username' type="Skillset" placeholder="Skillset"/>
                </FormGroup>
                <FormGroup>
                    <label className="Cen">Unit</label>
                    <Input className='Username' type="Unit" placeholder="Unit"/>
                </FormGroup>
                
                <Button  onClick={() => currentStatus("update")} className="block">Update</Button>
                <Button  onClick={() => currentStatus("back")} className="block">Back</Button>
               </Form>
             </div>
             )}
             </div>
    );
    
}
            
export default MyProfile;