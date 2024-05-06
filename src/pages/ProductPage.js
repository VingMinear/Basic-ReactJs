import { useState, useEffect } from 'react';
import FetchProduct from '../controller/FetchProduct.js';
import '../style/product_style.css'
import ProductList from '../components/ProductList';
const ProductPage = () => {

    const { data: listProduct, isLoading, error, deleteProduct: onDeleted } = FetchProduct();
    // const onDeleted = (id) => {
    //     const newList = listProduct.filter(p => p.id != id);
    //     listProduct = newList;
    // };
    return (
        <div className="product">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <h1>Product Page</h1>
                <button className='btn' >Add Product</button>
            </div>
            <hr className='hr' />
            {isLoading && <div className='loading'><span class="loader"></span></div>}
            {

                // checking null if ( listProduct is false not show)
                listProduct && listProduct.length > 0 ? (
                    <ProductList listProduct={listProduct} onDeleted={onDeleted} />
                ) : (
                    !isLoading && <p className='loading'>Empty</p>
                )
            }
        </div>
    );
}

export default ProductPage;