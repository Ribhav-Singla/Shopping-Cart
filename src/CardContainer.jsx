/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import CardItems from "./CardItems";
import ClearCart from "./ClearCart";

export default function CardContainer(props) {

    const [clearCart , setClearCart] = React.useState(false);

    function handleClearCart(){
        setClearCart(prevClearCart => !prevClearCart)
    }

    const { data, increaseItem, decreaseItem, removeItem ,totalQuantity,totalPrice} = props;

    const cartElements = data.map((item) => {
        return (
            <CardItems
                key={item.id}
                id={item.id}
                description={item.description}
                price={item.price}
                amount={item.amount}
                img={item.img}
                increaseItem={increaseItem}
                decreaseItem={decreaseItem}
                removeItem={removeItem}
            />
        )
    })

    

    return (
        <>{
            data.length > 0 ?
                (
                    <>  {clearCart && <ClearCart emptyCart={props.emptyCart} handleClearCart={handleClearCart}/>}
                        <div className="item-cont">
                            {cartElements}
                        </div>
                        <hr />
                        <div className="clear-cart-cont">
                            <button className="btn btn-outline-secondary clear-cart" onClick={handleClearCart}>Clear Cart</button>
                            <div className="subtotal-cont">
                                <p className="fw-semibold fs-5 "> Subtotal ({totalQuantity} item): <span className="fs-6 fw-light">₹</span>{totalPrice+".00"}</p>
                            </div>
                        </div>

                    </>
                )
                :
                (
                    <>
                        <h2 className="text-start mt-4" >Your Cart is empty.</h2>
                        <button className="btn btn-primary" onClick={()=>window.location.reload()}>Shop now</button>
                        <hr />
                        <div>
                            <p className="fw-semibold fs-5 text-end"> Subtotal ({totalQuantity} item): <span className="fs-6 fw-light">₹</span>{totalPrice+".00"}</p>
                        </div>
                    </>
                )
        }
        </>
    )
}