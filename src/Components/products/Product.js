import React from 'react'
import "./product.css"

function Product(props) {
    return (
        <div className="product">
            <img className="product__image" src={props.image} />
            <div className="product__text">
                <h4>{props.title} </h4>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Product
