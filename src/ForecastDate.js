import React from "react";

export default function ForcastDate(props) {
    let date = new Date(props.date * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    let day = days[date.getDay()];

    return (
        <span>
            {day}
        </span>
    )
}