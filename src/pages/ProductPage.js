import { useState } from 'react';
import '../style/product_style.css'
import ProductList from '../components/ProductList';
const ProductPage = () => {
    const [listProduct, setProduct] = useState([
        { id: 1, name: 'Coca Cola', price: 5, img: 'https://freedesignfile.com/upload/2018/07/Soft-drink-advertising-poster-vector-02.jpg' },
        { id: 2, name: 'Fanta', price: 3, img: 'https://marketplace.canva.com/EAD8qOiaPyc/1/0/900w/canva-pink-and-white-healthy-drinks-facebook-story-ads-pWB30ML0LZ0.jpg' }
    ]);
    const onDeleted = (id) => {
        const newList = listProduct.filter(p => p.id != id);
        setProduct(newList);
    };
    return (
        <div className="product">
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
            }}>
                <h1>Product Page</h1>
                <button className='btn' onClick={() => { }}>Add Product</button>
            </div>
            <hr className='hr' />
            {
                <ProductList listProduct={listProduct} onDeleted={onDeleted} />
            }
        </div>
    );
}

export default ProductPage;