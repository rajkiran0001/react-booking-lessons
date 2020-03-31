import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from "../context"
import ContactForm from './ContactForm';

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
                        </div>
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </React.Fragment>

            // <Product></Product>

        )
    }
}

export default ProductList
