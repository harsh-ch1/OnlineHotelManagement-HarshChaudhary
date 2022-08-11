import React from "react";
import { Button, Card, CardBody, CardText, CardTitle } from "reactstrap";
import base_url from "../api/bootapi";

const RetrieveReport = () => {
    const staffReport = () => {
        window.open(`${base_url}RetrieveReport/generatestaffreport`)
    }
    const incomeReport = () => {
        window.open(`${base_url}RetrieveReport/generateincomereport`)
    }
    return (

        <div>
            <Card className="text-center">

                <CardBody bg-primary="true">
                    <CardTitle tag="h5" className="display-5">
                        Download Report From Here
                    </CardTitle>
                    <CardText className="display-7">
                        Please Choose the report Type

                    </CardText>
                    <Button outline={true} color="primary" style={{ margin: 15 }} onClick={() => { staffReport() }}>Staff Report</Button>
                    <Button outline={true} color="primary" onClick={() => { incomeReport() }}>Income Report</Button>

                </CardBody>
            </Card>

        </div>
    )


};

export default RetrieveReport;