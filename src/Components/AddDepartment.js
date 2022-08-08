import React, { useState, handleClick, useStyles } from "react";

import { Button, Container, Form, FormGroup, Input} from "reactstrap";
import Department from "./Department";



const AddDepartment=()=>{
    return (
        <div>
            
            <h1 className="text-center my-3">Fill Department Details</h1>
            <Form>
                <FormGroup>
                    <label for="departmentId">Department Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="departmentId" 
                    id="departmentId" 
                    //style={{width: 400}}
                    />
                </FormGroup>
                <FormGroup>
                    <label for="departmentName">Department Name </label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="departmentName" 
                    id="departmentName" />
                </FormGroup>
                <FormGroup>
                    <label for="departmentSize">Department Size </label>
                    <Input 
                    type="number" 
                    placeholder="Enter Size here" 
                    name="departmentSize" 
                    id="departmentSize" />
                </FormGroup>
                <FormGroup>
                    <label for="hodName">HOD Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Hod Name here" 
                    name="hodName" 
                    id="hodName" />
                </FormGroup>
                <FormGroup>
                    <label for="hodPhoneNo">HOD Phone No</label>
                    <Input 
                    type="tel" 
                    placeholder="Enter Phone here" 
                    name="hodPhoneNo" 
                    id="hodPhoneNo" />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{margin:8}}>clear</Button>
                </Container>
            </Form>

        </div>
    );
};

export default AddDepartment;