import React from "react";
import { Link } from "react-router-dom";
import {
    Button, Container, Form, FormGroup, Input, Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,

} from "reactstrap";
const ViewDepartmentByName = () => {
    const handleForm = (e) => {
        console.log(name);
        let a = 'http://localhost:3000/owner/viewdepartmentbyName/result/';
        let b = a + name;
        window.open(b, "_top");
        e.preventDefault();
    }
    var name = "";
    return (
        <div>
            <h2 className="text-center my-3">View Department By Name</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label className="my-2" htmlFor="departmentName">Enter Department Name</label>
                    <Input
                        type="text"
                        placeholder="Enter Name here"
                        name="departmentName"
                        id="departmentName"
                        onChange={(e) => {
                            name = e.target.value;
                        }}
                    />

                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Search</Button>
                </Container>
            </Form>
        </div>
    )
}

export default ViewDepartmentByName;