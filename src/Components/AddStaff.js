import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";

const AddStaff = () => {
    return (

        <div>

            <h1 className="text-center my-3">Fill Staff Details</h1>
            <Form>
                <FormGroup>
                    <label htmlFor="staffId">Code</label>
                    <Input
                        type="number"
                        placeholder="Enter Id here"
                        name="staffId"
                        id="staffId"

                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="firstName">First Name </label>
                    <Input
                        type="text"
                        placeholder="Enter First Name here"
                        name="firstName"
                        id="firstName" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="lastName">Last Name </label>
                    <Input
                        type="text"
                        placeholder="Enter last Name here"
                        name="lastName"
                        id="lastName" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="staffSalary">Salary </label>
                    <Input
                        type="number"
                        placeholder="Enter Salary here"
                        name="staffSalary"
                        id="staffSalary" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="joinedOn">Joining Date </label>
                    <Input
                        type="date"
                        placeholder="Enter date here"
                        name="joinedOn"
                        id="joinedOn" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="staffAge">Age </label>
                    <Input
                        type="number"
                        placeholder="Enter Age here"
                        name="staffAge"
                        id="staffAge" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="staffOccupation">Occupation </label>
                    <Input
                        type="text"
                        placeholder="Enter occupation here"
                        name="staffOccupation"
                        id="staffOccupation" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="staffEmail">Email </label>
                    <Input
                        type="email"
                        placeholder="Enter email here"
                        name="staffEmail"
                        id="staffEmail" />
                </FormGroup>
                <br></br>

                <h5 >Address </h5>
                <FormGroup>
                    <label htmlFor="streetName">StreetName </label>
                    <Input
                        type="text"
                        placeholder="enter here"
                        name="streetName"
                        id="streetName" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="houseNo">House No </label>
                    <Input
                        type="text"
                        placeholder="enter here"
                        name="houseNo"
                        id="houseNo" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="city">City </label>
                    <Input
                        type="text"
                        placeholder="enter here"
                        name="city"
                        id="city" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="country">Country </label>
                    <Input
                        type="text"
                        placeholder="enter here"
                        name="country"
                        id="country" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="pincode">Pincode </label>
                    <Input
                        type="number"
                        placeholder="enter here"
                        name="pincode"
                        id="pincode" />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="addressId">Address Id </label>
                    <Input
                        type="number"
                        placeholder="enter here"
                        name="addressId"
                        id="addressId" />
                </FormGroup>

                <Container className="text-center">
                    <Button color="success">Submit</Button>
                    <Button color="dark " style={{ margin: 8 }}>clear</Button>
                </Container>
            </Form>

        </div>
    )
}

export default AddStaff;