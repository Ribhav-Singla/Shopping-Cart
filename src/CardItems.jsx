/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function CardItems(props){

    const {id,increaseItem ,decreaseItem ,removeItem} = props;

    return (
        <>
            <hr />
            <div className="item--container">
                <div>
                    <img src={props.img}alt="" width="170px" height="180px" style={{marginLeft:"30px"}} />
                </div>

                <div className="desc--container">
                    <div className="d-flex flex-column">
                        <h4 className="fs-5 fw-semibold">{props.description}</h4>
                        <h5><span style={{color:"green"}}>In stock</span></h5>
                        <p style={{color:"grey"}}>Gift options not available.</p>
                    </div>
                    <div className="qty-container gap-3">
                        <div className="d-flex">
                            <button 
                                    className="btn btn-primary" 
                                    onClick={()=>props.amount >1 && decreaseItem(id)}
                            >
                                <span className="fw-bolder">
                                    -
                                </span>
                            </button>

                            <h4>&nbsp;&nbsp;{props.amount}&nbsp;&nbsp;</h4>

                            <button 
                                    className="btn btn-primary" 
                                    onClick={()=>increaseItem(id)}
                            >
                                <span className="fw-bolder">
                                    +
                                </span>
                            </button>
                        </div>
                        <button 
                                className="btn btn-outline-secondary" 
                                onClick={()=>removeItem(id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>

                <div className="text-end">
                    <h5 className="fw-medium">Price</h5>
                    <p className="fs-5 fw-semibold"><span className="fw-light fs-6">₹</span>{props.price+".00"}</p>
                </div>
            </div>
        </>
    )
}