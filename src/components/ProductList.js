import { useState } from 'react';
import '../style/product_style.css'

const ProductList = ({ listProduct, onDeleted }) => {

    return (
        listProduct.map((product) => {
            return (
                <div className='card' key={product.id}>
                    <div className='img' style={{
                        backgroundImage: `url(${product.img})`,
                    }}></div>
                    <div style={{
                        marginRight: 'auto',
                        fontWeight: 'bold'
                    }}> {product.name}</div>
                    <div style={{
                        color: 'white',
                        fontSize: '17px',
                        fontWeight: 'bold',
                        marginRight: '10px',
                    }}>  $ {product.price}</div>
                    <button className='btn' style={{
                        marginLeft: '5px',
                        padding: '10px'
                    }} onClick={() => onDeleted(product.id)}>
                        Deleted
                    </button>
                </div>
            );
        })
    );
}

export default ProductList;