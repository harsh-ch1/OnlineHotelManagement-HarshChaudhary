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
import { Col, Container, Row } from 'reactstrap';
import OwnerMenu from './Components/OwnerMenu';
import{ BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div>
      <Router>
      <Container>
        <Header />
        <Row>
          <Col md={4}>
            <OwnerMenu />
          </Col>
          <Col md={8}>
            <Routes>

            <Route path="/" element={<Home />} exact />
            <Route path='/adddepartment' element={< AddDepartment/>} exact/>
            <Route path='/viewall' element={<AllDepartments />} exact/>
            </Routes>
          </Col>
        </Row>
      </Container>
      </Router>
    </div>
    
  );
}

export default App;
