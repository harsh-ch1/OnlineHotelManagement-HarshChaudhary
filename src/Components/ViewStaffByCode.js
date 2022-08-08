import React from "react";
import { Button, Container, Form, FormGroup, Input} from "reactstrap";

const ViewStaffByCode=()=>{
    return(
        <div>
            <h2 className="text-center my-3">View Staff By Code</h2>
            <Form>
                <FormGroup>
                    <h5><label  className="my-2" for="staffId">Enter Staff code</label></h5>
                    <Input 
                    type="number" 
                    placeholder="Enter code here" 
                    name="staffId" 
                    id="staffId" 
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

export default ViewStaffByCode;