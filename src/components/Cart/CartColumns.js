import React, { Component } from 'react'

class CartColumns extends Component {

    render() {
        return (
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">products</div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">name of product</div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">price</div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">quantity</div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">remove</div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <div className="text-uppercase">totol</div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CartColumns
