/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Navbar({totalQuantity}) {
    return (
        <>
            <div >
                <nav>
                    <h2 className="fw-semibold mt-2">Shirts.com</h2>
                    <div className="nav--cart">
                        <img src="./cart.png" alt="cart" width="53px"/>
                        <div>
                            <p className="fw-semibold">{totalQuantity}</p>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}