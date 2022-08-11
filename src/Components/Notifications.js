import React, { useState, useEffect } from "react";
import base_url from "../api/bootapi";
import axios from "axios";
import NotificationData from "./NotificationData";

const Notifications = () => {
    useEffect(() => {
        document.title = "Notifications"
    }, []);


    // function to call server
    const getAllNotificationsFromServer = () => {
        axios.get(`${base_url}ManageDepartment/notification`, {
            headers: {
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Allow-Methods": "*"
            }
        }).then(
            (response) => {
                //success
                console.log(response.data);
                //toast("Data Fetched from Backend");
                // var i = response.data.length;
                setnotification(response.data);

            },
            (error) => {
                //for errors
                console.log(error);
                // toast.error("Data can't be Fetched from Backend");
            }
        );
    };


    useEffect(() => {
        getAllNotificationsFromServer();
    }, []);

    const [notification, setnotification] = useState([]);
    let i = 1;
    return (
        <div>
            <h1 className="text-center my-3">Notifications</h1>

            {
                notification.length > 0
                    ? notification.map((item) =>
                        <NotificationData key={i++} notification={item} />)
                    : "No Notification Present"
            }
        </div>
    );
}

export default Notifications;