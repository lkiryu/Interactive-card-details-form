import React from "react";
import Cards from "../cards/cards";
import Inputs from "../inputs/inputs";

import './cardDetail.css'

const CardDetail = () => {
    return (
        <main className='container'>
            <Cards/>
            
            <Inputs/>
        </main>
    )
}

export default CardDetail