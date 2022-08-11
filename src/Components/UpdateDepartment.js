import axios from "axios";
import React, { useState, handleClick, useStyles, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import Department from "./Department";
import base_url from "../api/bootapi";
import { useParams } from 'react-router-dom';

const UpdateDepartment = () => {
    useEffect(() => {
        document.title = "Update Department";
    }, []);

    useEffect(() => {
        getdata();
    }, []);
    var name = useParams();
    console.log(name.name);
    const getdata = () => {
        axios.get(`${base_url}ManageDepartment/viewdepartment/${name.name}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                'Content-Type': 'application/json',
                "Access-Control-Allow-Methods": "*"
            }
        }).then(
            (response) => {
                if (response.data.id != null) {
                    console.log(response.data);
                    setDepartment(response.data);
                }
            }, (error) => {
                console.log(error);
                console.log("error");
            }
        )
    }
    const [department, setDepartment] = useState({});

    // form handler function
    const handleForm = (e) => {
        console.log(department);
        putDataToServer(department);
        e.preventDefault();
    };

    // function to post data on backend
    const putDataToServer = (data) => {
        axios.put(`${base_url}ManageDepartment/updatedepartment`, data, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "*"
            }
        }).then(
            (response) => {
                if (response.data.id != null) {
                    console.log(response);
                    console.log("success");
                    alert("Department updated successfully");
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

            <h1 className="text-center my-3">Update Department Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label htmlFor="departmentId">Department Id</label>
                    <Input
                        type="number"
                        defaultValue={department.id}
                        name="departmentId"
                        id="departmentId"
                        onChange={(e) => {
                            setDepartment({ ...department, id: e.target.value });
                        }}

                    //style={{width: 400}}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="departmentName">Department Name </label>
                    <Input
                        type="text"
                        defaultValue={department.name}
                        name="departmentName"
                        id="departmentName"
                        onChange={(e) => {
                            setDepartment({ ...department, name: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="departmentSize">Department Size </label>
                    <Input
                        type="number"
                        defaultValue={department.sizeOfDepartment}
                        name="departmentSize"
                        id="departmentSize"
                        onChange={(e) => {
                            setDepartment({ ...department, sizeOfDepartment: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="hodName">HOD Name</label>
                    <Input
                        type="text"
                        defaultValue={department.hodName}
                        name="hodName"
                        id="hodName"
                        onChange={(e) => {
                            setDepartment({ ...department, hodName: e.target.value });
                        }}
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="hodPhoneNo">HOD Phone No</label>
                    <Input
                        type="tel"
                        defaultValue={department.hodPhoneNo}
                        name="hodPhoneNo"
                        id="hodPhoneNo"
                        onChange={(e) => {
                            setDepartment({ ...department, hodPhoneNo: e.target.value });
                        }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">Submit</Button>
                    <Button type={"reset"} color="dark " style={{ margin: 8 }}>Reset</Button>
                </Container>
            </Form>

        </div>
    );
};

export default UpdateDepartment;