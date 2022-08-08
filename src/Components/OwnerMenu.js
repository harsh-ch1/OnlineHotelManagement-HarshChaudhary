import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, ListGroup, ListGroupItem, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,} from "reactstrap";

const OwnerMenu=()=>{
    return(
        <div>

        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/owner">
            <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Home
                </DropdownToggle>
                </UncontrolledDropdown>
                </div>
            
            </Link>



            
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/owner">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage Department
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/owner/adddepartment">Add Department</Link>
                
                </DropdownItem>
                    
                <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/viewdepartmentbyid">View Department by id</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/viewall">View All Department</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>

            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/owner">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage User
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/owner/adduser">Add User</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/updateuser">update User</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/owner/deleteuser">Delete User</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>
            
            

            <Link className="list-group-item list-group-item-action" tag="a" to="/owner/retrievereport">
            <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Retrieve Report
                </DropdownToggle>
                </UncontrolledDropdown>
                </div>
            
            </Link>
            
        </ListGroup>

        <Container className="text-center my-5" >
        <Link className="button" tag="a" to="/owner/notifications">
            <Button  className="col-4" style={{color: "white" , backgroundColor: "#330033"}}>Notifications</Button><br></br>
            </Link>
            <Button  color="danger" className="my-3 col-4">Logout</Button>
        </Container>

        </div>
    )
}

export default OwnerMenu;