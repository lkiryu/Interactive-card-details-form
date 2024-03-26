import React from "react";
import Cards from "../cards/cards";

const CardDetail = () => {
    return (
        <>
            <Cards/>
            <div className="inputs">
                <div className="cardholderName">
                    <p></p>
                    <input type="text" className="cardholderNameInput" placeholder=""></input>
                </div>

                <div className="cardNumber">
                    <p></p>
                    <input type="text" className="numberInput" placeholder=""></input>
                </div>

                <div>
                    <div className="expDate">
                        <p></p>
                        <div className="input">
                            <input type="number" className="month" placeholder=""></input>
                            <input type="number" className="year" placeholder=""></input>
                        </div>
                    </div>
                    <div className="cvc">
                        <p></p>
                        <input type="number" className="cvcInput" placeholder=""></input>
                    </div>
                </div>

                <input type="submit" className="submitButton" value=''></input>
            </div>
        </>
    )
}

export default CardDetail