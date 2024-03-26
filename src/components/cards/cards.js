import React from "react";

const Cards = () => {
    return (
        <div className="cards">
            <div className="cardFront">
                <img src="" alt=""></img>
                <p className="cardNumber"></p>
                <div className="cardInfo">
                    <p className="name"></p>
                    <p className="validity"><span className="mm"></span>/<span className="yy"></span></p>
                </div>
            </div>
            <div className="cardBack">
                <p className="cvc"></p>
            </div>
        </div>
    )
}

export default Cards