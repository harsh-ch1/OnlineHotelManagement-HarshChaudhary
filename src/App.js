import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';

import 'react-toastify/dist/ReactToastify.css';
//import { ToastContainer, toast } from "react-toastify";
import Home from './Components/Home';
import Department from './Components/Department';
import AllDepartments from './Components/AllDepartments';
import AddDepartment from './Components/AddDepartment';
import AddUser from './Components/AddUser';
import Notifications from './Components/Notifications';
import AddStaff from './Components/AddStaff';
import AddRoom from './Components/AddRoom';
import { Col, Container, Row } from 'reactstrap';
import OwnerMenu from './Components/OwnerMenu';
import ManagerMenu from './Components/ManagerMenu';
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RetrieveReport from './Components/RetrieveReport';
import ViewDepartmentById from './Components/ViewDepartmentById';
import AddInventory from './Components/AddInventory';
import ViewInventoryByName from './Components/ViewInventoryByName';
import ViewStaffByCode from './Components/ViewStaffByCode';
import ViewRoomByRoomNo from './Components/ViewRoomByRoomNo';
import ViewAllInventory from './Components/ViewAllInventory';
import ViewAllStaff from './Components/ViewAllStaff';
import SetRates from './Components/SetRates';
import UpdateUser from './Components/UpdateUser';
import DeleteUser from './Components/DeleteUser';

function App() {


  return (
    <div >
      <Router>
      <Container >
        <Header />
        <Row>
          <Col md={4}>
            <Routes>
              <Route path="/owner/*" element = {<OwnerMenu />} exact/>
              <Route path="/manager/*" element = {<ManagerMenu />} exact/>
            </Routes>
            
          </Col>
          <Col md={8}>
            <Routes>

            <Route path="/owner" element={<Home />} exact />
            <Route path='/owner/adddepartment' element={< AddDepartment/>} exact/>
            <Route path='/owner/viewall' element={<AllDepartments />} exact/>
            <Route path='/owner/viewdepartmentbyid' element={<ViewDepartmentById />} exact/>
            <Route path='/owner/retrievereport' element={<RetrieveReport />} exact/>
            <Route path='/owner/notifications' element={<Notifications />} exact/>
            <Route path='/owner/adduser' element={< AddUser/>} exact/>
            <Route path='/owner/updateuser' element={<UpdateUser />} exact/>
            <Route path='/owner/deleteuser' element={<DeleteUser />} exact/>
            <Route path='/owner' element={<Home />} exact/>

            <Route path="/manager" element={<Home />} exact />
            <Route path='/manager/addinventory' element={< AddInventory/>} exact/>
            <Route path='/manager/viewinventory' element={< ViewAllInventory/>} exact/>
            <Route path='/manager/viewinventorybyname' element={< ViewInventoryByName/>} exact/>
            <Route path='/manager/addstaff' element={< AddStaff/>} exact/>
            <Route path='/manager/viewstaff' element={< ViewAllStaff/>} exact/>
            <Route path='/manager/viewstaffbycode' element={< ViewStaffByCode/>} exact/>
            <Route path='/manager/addRoom' element={< AddRoom/>} exact/>
            <Route path='/manager/viewroombyroomno' element={< ViewRoomByRoomNo/>} exact/>
            <Route path='/manager/setrates' element={< SetRates/>} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
    
  );
}

export default App;
