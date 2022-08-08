import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const ViewRoomByRoomNo=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Room by Room Number</h2>
            <Form>
                <FormGroup>
                    <h5><label  className="my-2" for="roomno">Enter Room No</label></h5>
                    <Input 
                    type="number" 
                    placeholder="Enter here" 
                    name="roomno" 
                    id="roomno" 
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

export default ViewRoomByRoomNo;