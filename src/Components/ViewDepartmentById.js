import React from "react";
import { Button, Container, Form, FormGroup, Input,Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    
    } from "reactstrap";

const ViewDepartmentById=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Department By Id</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="departmentId">Enter Department Id</label>
                    <Input 
                    type="number" 
                    placeholder="Enter Id here" 
                    name="departmentId" 
                    id="departmentId" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>

                <Container className="text-center">
                    <Button  color="success">Search</Button>
                </Container><br></br><br></br>
                

                    
                <div>
                <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">Kitchen</CardSubtitle>
                <br></br>
                <CardText>Department Size : 25</CardText>
                <CardText>Department HOD : Rajesh Kumar</CardText>
                <CardText>HOD Phone No. : 9990661578</CardText>
                
                <Container className="text-center">
                    <Button  style={{color: "white" , backgroundColor: "#003333"}}>Update</Button>
                    <Button className="mx-2" style={{color: "white" , backgroundColor: "#999900"}}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
                </div>
                
            

        </div>
    )
}

export default ViewDepartmentById;