import React, { Component } from 'react'
import styled from "styled-components";
import { ButtonContainer } from "./Button"
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"


class Model extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { img, title, price } = value.modalProduct
                    if (!modalOpen) {
                        return null;
                    }
                    else {
                        return (
                        <ModelContainer>
                            <div id="modal" className="container">
                                <div className="row">
                                    <div className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize">
                                        <h5>item added to the cart</h5>
                                        <img src={img} className="img-fluid"
                                        alt="product"/>
                                        <h5>{title}</h5>
                                        <h5 className="text-muted">price : $ {price}</h5>
                                        <Link to="/">
                                            <ButtonContainer onClick={() => closeModal()}>
                                                store
                                            </ButtonContainer>
                                        </Link>
                                        <Link to="/cart">
                                            <ButtonContainer cart onClick={() => closeModal()}>
                                                go to cart
                                            </ButtonContainer>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </ModelContainer>)

                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModelContainer = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(0, 0, 0, 0.3);
display: flex;
align-items: center;
justify-content: center;
#modal {
    background: var(--mainWhite);
}
`

export default Model

