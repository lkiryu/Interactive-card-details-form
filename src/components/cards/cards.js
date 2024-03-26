import React from "react";
import CardFront from "./cardFront/cardFront";
import CardBack from "./cardBack/cardBack";

import './cards.css'

const Cards = () => {
    return (
        <div className="cards">
            <CardFront/>

            <CardBack/>
        </div>
    )
}

export default Cards