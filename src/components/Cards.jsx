import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import '../App.css';


export default function Card(props) {
    return (
        <div className="card">

            <img src={props.place.imageUrl} className="location-image" />

            <div className="place-details">
                <span className="icon-location">
                <FontAwesomeIcon icon={faLocationDot} style={{color: "#ff0000",}} className="loaction-icon"/>
                    <span>{props.place.location}</span>
                </span>
                <a href={props.place.googleMapsUrl}>View on Google maps</a>
                <h1 className="place-title">{props.place.title}</h1>
                <h2>{props.place.startDate} - {props.place.endDate}</h2>
                <div>{props.place.description}</div>
            </div>
        </div>
    )
}