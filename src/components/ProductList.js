import React, { Component } from 'react'
import Product from "./Product"
import Title from "./Title"
import { ProductConsumer } from "../context"
import NetlifyForm from 'react-netlify-form'

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
                        <NetlifyForm name='Contact Form'>
                            {({ loading, error, success }) => (
                                <div>
                                    {loading &&
                                        <div>Loading...</div>
                                    }
                                    {error &&
                                        <div>Your information was not sent. Please try again later.</div>
                                    }
                                    {success &&
                                        <div>Thank you for contacting us!</div>
                                    }
                                    {!loading && !success &&
                                        <div>
                                            <strong>name: </strong><input type='text' name='Name' required />
                                            <strong>Email: </strong><input type='text' name='Name' required />
                                            <strong>comments: </strong> <textarea name='Message' required />
                                            <button>Submit</button>
                                        </div>
                                    }
                                </div>
                            )}
                        </NetlifyForm>
                    </div>
                </div>
            </React.Fragment>

            // <Product></Product>

        )
    }
}

export default ProductList
