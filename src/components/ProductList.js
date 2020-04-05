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
                        </div><br/>
                        <b style={{color: "#2a2a72"}}>Registration Form:</b>
                        <ContactForm/>
                        <br/>
                            <strong style={{color:"red"}}>Booked Time Slots:s</strong><br/>
                            <b style={{color:"red"}}>our courses are available on fridays, saturdays and sundays</b>
                        <Calander/>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default ProductList
