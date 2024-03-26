import React from "react";
import cardLogo from '../../../images/card-logo.svg'

import './cardFront.css'

const CardFront = () => {
    return (
        <div className="card front">
            <img src={cardLogo} alt="logo" className="logo"></img>
            <p className="cardNumber">0000 0000 0000 0000</p>
            <div className="cardInfo">
                <p className="name">Jane Appleseed</p>
                <p className="validity"><span className="mm">00</span>/<span className="yy">00</span></p>
            </div>
        </div>
    )
}

export default CardFront