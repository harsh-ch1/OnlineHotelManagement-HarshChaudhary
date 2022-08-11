import React from "react";
import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    CardSubtitle,
    CardFooter,
    Button,
    Container,
} from "reactstrap";

const NotificationData = ({ notification }) => {

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="fw-bold">{notification}</CardSubtitle>
            </CardBody>
        </Card>
    );

};

export default NotificationData;