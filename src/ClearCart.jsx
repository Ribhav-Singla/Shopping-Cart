/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";

export default function ClearCart({emptyCart , handleClearCart}){
    return (
        <>
            <div className="overlay">
                <div className="clearCart--container">
                    <h3>Clear all cart?</h3>
                    <div className="d-flex gap-4">
                        <button className="btn btn-outline-primary" onClick={emptyCart}>Yes</button>
                        <button className="btn btn-outline-primary" onClick={handleClearCart}>No</button>
                    </div>
                </div>
            </div>
        </>
    )
}