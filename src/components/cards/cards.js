import React from "react";
import CardFront from "./cardFront/cardFront";

const Cards = () => {
    return (
        <div className="cards">
            <CardFront/>
            <div className="cardBack">
                <p className="cvc"></p>
            </div>
        </div>
    )
}

export default Cards