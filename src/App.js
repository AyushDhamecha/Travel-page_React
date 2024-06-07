import React from "react"
import Navbar from "./Component/Navbar"
import data from "./data"
import Card from "./Component/Card"
import "./Component/style.css"

export default function App() {
    const cards = data.map((item, index) => (
        <React.Fragment key={index}>
            <Card {...item} />
            <div className="line"></div>
        </React.Fragment>
    ));
    
    return (
        <div>
            <Navbar />
            <section className="cards-list">{cards}</section>
        </div>
    );
}