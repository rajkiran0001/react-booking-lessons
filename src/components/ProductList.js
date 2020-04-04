import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from "../context"
import ContactForm from './ContactForm';
import Event from './Event';
import Calander from './Calander';



class ProductList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="courses" />
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>{" "}
                        Contact Form:
                        <ContactForm/>
                        Booked Time Slot:
                        <Calander/>
                    </div>
                </div>
            </React.Fragment>

            // <Product></Product>

        )
    }
}

export default ProductList
