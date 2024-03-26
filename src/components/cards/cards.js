import React from "react";
import CardFront from "./cardFront/cardFront";
import CardBack from "./cardBack/cardBack";

const Cards = () => {
    return (
        <div className="cards">
            <CardFront/>
            <CardBack/>
        </div>
    )
}

export default Cards