import React from 'react';
import { Link } from "react-router-dom"
import PayPalButton from './PayPalButton'


function CartTotals({ value, history }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    console.log(value);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-20 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={() => clearCart()}>clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal :</span>
                            <stron>$ {cartSubTotal}</stron>
                        </h5>
                        <h5>
                            <span className="text-title">tax :</span>
                            <stron>$ {cartTax}</stron>
                        </h5>
                        <h5>
                            <span className="text-title">total :</span>
                            <stron>$ {cartTotal}</stron>
                        </h5>
                        <PayPalButton total={cartTotal} clearCart={clearCart} history={history}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CartTotals;
