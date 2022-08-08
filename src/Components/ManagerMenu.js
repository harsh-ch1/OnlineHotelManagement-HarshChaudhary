import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, ListGroup, ListGroupItem, Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,} from "reactstrap";

const ManagerMenu=()=>{

    return(
        <div>

        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" to="/manager">
            <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Home
                </DropdownToggle>
                </UncontrolledDropdown>
                </div>
            
            </Link>



            
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/manager">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage Inventory
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/manager/addinventory">Add Inventory</Link>
                
                </DropdownItem>
                    
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewinventory">View All Inventory</Link>
                
                </DropdownItem>
                <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewinventorybyname">View Inventory By name</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>
            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/manager">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage Staff
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/manager/addstaff">Add Staff</Link>
                
                </DropdownItem>
                    
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewstaff">View All Staff</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewstaffbycode">View Staff by Code</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>

            <ListGroupItem className="list-group-item list-group-item-action" tag="a" to="/manager">
            
                <div class="dropdown-content">
                <UncontrolledDropdown>
                <DropdownToggle block outline className="text-center">
                     Manage Room
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>
                <Link className="list-group-item list-group-item-action" tag="a" to="/manager/addroom">Add Room</Link>
                
                </DropdownItem>
                    
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/viewroombyroomno">View Room by Room no</Link>
                
                </DropdownItem>
                    <DropdownItem>
                    <Link className="list-group-item list-group-item-action" tag="a" to="/manager/setrates">Set Room Rates</Link>
                
                </DropdownItem>
                
                
                
                </DropdownMenu>
                </UncontrolledDropdown>
            </div>
            
            </ListGroupItem>
            
            

            
            
        </ListGroup>

        <Container className="text-center my-5" >
            <Button className="col-4" color="danger" >Logout</Button>
        </Container>

        </div>
    )
    

};

export default ManagerMenu;
