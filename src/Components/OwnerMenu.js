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
            <Link className="list-group-item list-group-item-action" tag="a" to="/">
            <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Home
                </DropdownToggle>
                </UncontrolledDropdown>
                </div>
            
            </Link>



            
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage Department
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/adddepartment">Add Department</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/adddepartment">update Department</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/viewall">view Department</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>
            <Link className="list-group-item list-group-item-action" tag="a" to="/adddepartment">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage User
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/adddepartment">Add User</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/adddepartment">update User</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/viewall">Delete User</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </Link>
            
            

            <Link className="list-group-item list-group-item-action" tag="a" to="/">
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
            <Button color="danger" >Logout</Button>
        </Container>

        </div>
    )
}

export default OwnerMenu;