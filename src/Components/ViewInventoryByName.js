import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const ViewInventoryByName=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Inventory By Name</h2>
            <Form>
                <FormGroup>
                    <label  className="my-2" for="itemName">Enter Inventory Name</label>
                    <Input 
                    type="text" 
                    placeholder="Enter Name here" 
                    name="itemName" 
                    id="itemName" 
                    //style={{width: 400}}
                    />

                </FormGroup>
                </Form>
                <Container className="text-center">
                    <Button color="success">Search</Button>
                </Container>
        </div>
    )
}
export default ViewInventoryByName;