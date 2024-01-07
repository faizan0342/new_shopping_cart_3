import React from "react"

function CheckoutSteps(props){
    return(
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active' : ""}></div>
            <div className={props.step2 ? 'active' : ""}></div>
            <div className={props.step3 ? 'active' : ""}></div>
            <div className={props.step4 ? 'active' : ""}></div>
        </div>
    )
}

export default CheckoutSteps