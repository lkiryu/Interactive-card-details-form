import React from "react";

import './inputs.css'

const Inputs = () => {
    return (
        <div className="inputs">
            <div className="cardholderName">
                <p>Cardholder Name</p>
                <input type="text" className="cardholderNameInput" placeholder="e.g. Jane Appleseed"></input>
                <p className="error-menssage none">Can't be blank</p>
            </div>

            <div className="cardNumber">
                <p>Card Number</p>
                <input type="text" className="numberInput" placeholder="e.g. 1234 5678 9123 0000"></input>
                <p className="error-menssage none">Wrong format, numbers only</p>
            </div>

            <div className="expDate-cvc">
                <div className="expDate">
                    <p>Exp. Date (MM/YY)</p>
                    <div className="input">
                        <input type="number" className="month" placeholder="MM"></input>
                        <input type="number" className="year" placeholder="YY"></input>
                    </div>
                    <p className="error-menssage none">Can't be blank</p>
                </div>
                <div className="cvc">
                    <p>CVC</p>
                    <input type="number" className="cvcInput" placeholder="e.g. 123"></input>
                    <p className="error-menssage none">Can't be blank</p>
                </div>
            </div>

            <input type="submit" className="submitButton" value='Confirm'></input>
        </div>
    )
}

export default Inputs