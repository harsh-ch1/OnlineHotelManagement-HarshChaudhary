import axios from "axios";
import React, { useState, handleClick, useStyles, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

const AddInventory = () => {
    useEffect(() => {
        document.title = "Add Inventory";
    }, []);

    const [inventory, setinventory] = useState({});

    // form handler function
    const handleForm = (e) => {
        console.log(inventory);
        postDataToServer(inventory);
        e.preventDefault();
    };

    // function to post data on backend
    const postDataToServer = (data) => {
        axios.post(`${base_url}ManageInventory/addinventory`, data, {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "*"
            }
        }).then(
            (response) => {
                if (response.data.id != null) {
                    console.log(response);
                    console.log("success");
                    alert("inventory added successfully");
                } else {
                    alert("please fill correct data");
                }
            }, (error) => {
                console.log(error);
                console.log("error");
            }
        )
    };
    return (
        <div>

            <h1 className="text-center my-3">Fill Inventory Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="inventoryId">Inventory Id</label>
                    <Input
                        type="number"
                        placeholder="Enter Id here"
                        name="inventoryId"
                        id="inventoryId"
                        onChange={(e) => {
                            setinventory({ ...inventory, id: e.target.value });
                        }}

                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="itemName">Item Name </label>
                    <Input
                        type="text"
                        placeholder="Enter Name here"
                        name="itemName"
                        id="itemName"
                        onChange={(e) => {
                            setinventory({ ...inventory, itemname: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="itemQuantity">Quantity </label>
                    <Input
                        type="number"
                        placeholder="Enter Size here"
                        name="itemQuantity"
                        id="itemQuantity"
                        onChange={(e) => {
                            setinventory({ ...inventory, quantity: e.target.value });
                        }} />
                </FormGroup>

                <Container className="text-center">
                    <Button type="submit" color="success">Submit</Button>
                    <Button type={"reset"} color="dark " style={{ margin: 8 }}>clear</Button>
                </Container>
            </Form>

        </div>

    )
}

export default AddInventory;