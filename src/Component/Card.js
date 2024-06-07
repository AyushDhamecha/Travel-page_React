import React from "react";
import "../Component/style.css";
import locationImg from "../images/location.png"; // specific image import

export default function Card(props) {
    console.log(props);
    return (
        <div className="card">
            <img className="place-image" src={props.imageUrl} alt="pic of the Place" />
            <div className="card-content">
                <div className="loc">
                    <img className="location-icon" src={locationImg} alt="location icon" />
                    <span>{props.location.toUpperCase()}</span>
                    <a href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className="date">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
    );
}
