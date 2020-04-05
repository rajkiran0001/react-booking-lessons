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
                        <div>
                        <div style={{float: 'left'}}>
                        <b style={{color: "#006600"}}>Registration Form:</b>
                        <ContactForm/>
                        <br/>
                        </div>
                        <div style={{float: 'right', maxWidth:680}}>
                            <strong style={{color:"red"}}>Booked Time Slots:s</strong><br/>
                        <Calander/>
                        </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

export default ProductList
