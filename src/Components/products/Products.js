import React from 'react'
import Product from './Product'
import "./product.css"

export default function Products() {
    return (
        <div className="products" id="product">
            <h1>Products</h1>
            <div className="products_div">
                <Product image="/images/product_1.PNG" text="Brands we sell Alisha, Kalyani, Madam, Jockey etc" title="Under Garments" />
                <Product image="/images/product_2.PNG" text="Hair band, hair clips, clutchers, banana pins etc" title="Hair Assessories" />
                <Product image="/images/product_3.PNG" text="T-shirts, Joggers, Trousers, Laggies, Night wear, Shorts etc" title="Women Casuals" />
            </div>
        </div>
    )
}
