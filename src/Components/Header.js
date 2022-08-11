import React from "react";
import { Card, CardBody } from "reactstrap";

function Header({ name, title }) {
    return (
        <div>
            <Card style={{ backgroundColor: "#343A40" }} >
                <CardBody>
                    <h1 className="text-center my-4" style={{ color: "white", padding: "0px", marginRight: "0px" }}>Welcome to My Hotel</h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header;