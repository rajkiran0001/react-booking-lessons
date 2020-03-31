import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { ButtonContainer } from "./Button"
import { ProductConsumer } from "../context"

class Details extends Component {

    render() {
        return (
            <ProductConsumer>
                {value => {
                    const { id, company, img, info, price, title, inCart } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* titile */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>Course Type : {title}</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product" />
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        course : <span className="text-uppercase">{company}</span></h4>
                                    <h4 className="text-blue"><strong>price : <span>$</span> {price}</strong>{" "}
                                    <strong style={{ textDecoration: 'line-through', color: '#435c8f'}}>$10</strong></h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0"> some info about course:</p>
                                    <p className="text-muted lead">{info}</p>
                                    <div>
                                        <Link to="/">
                                            <ButtonContainer>back to courses</ButtonContainer>
                                        </Link>
                                        <ButtonContainer cart disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)

                                            }}
                                        >
                                            {inCart ? "inCart" : "add to Cart"}
                                        </ButtonContainer>

                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}


export default Details
