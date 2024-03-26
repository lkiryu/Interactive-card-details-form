import React from "react";
import changeCardholderName from "../js/change/cardholderName";
import changeCardNumber from "../js/change/Number";
import changeMonth from "../js/change/month";
import changeYear from "../js/change/year";
import changeCvc from "../js/change/cvc";

import './inputs.css'

const Inputs = () => {
    return (
        <div className="inputs">
            <div className="cardholderName">
                <p>Cardholder Name</p>
                <input type="text" className="cardholderNameInput" placeholder="e.g. Jane Appleseed" onChange={changeCardholderName}></input>
                <p className="error-menssage none">Can't be blank</p>
            </div>

            <div className="cardNumber">
                <p>Card Number</p>
                <input type="number" className="numberInput" placeholder="e.g. 1234 5678 9123 0000" onChange={changeCardNumber}></input>
                <p className="error-menssage none">Wrong format, numbers only</p>
            </div>

            <div className="expDate-cvc">
                <div className="expDate">
                    <p>Exp. Date (MM/YY)</p>
                    <div className="input">
                        <input type="number" className="month" placeholder="MM" onChange={changeMonth}></input>
                        <input type="number" className="year" placeholder="YY" onChange={changeYear}></input>
                    </div>
                    <p className="error-menssage none">Can't be blank</p>
                </div>
                <div className="cvc-content">
                    <p>CVC</p>
                    <input type="number" className="cvcInput" placeholder="e.g. 123" onChange={changeCvc}></input>
                    <p className="error-menssage none">Can't be blank</p>
                </div>
            </div>

            <input type="submit" className="submitButton" value='Confirm'></input>
        </div>
    )
}

export default Inputs