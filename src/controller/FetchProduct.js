import HttpGet from '../service/Http.js';
import { useState, useEffect } from 'react';
const FetchProduct = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products?limit=10&skip=10').then((res) => {
                if (!res.ok) {
                    throw Error('could not fetch data');
                }

                return res.json();
            }).then((data) => {
                setError(null);
                setLoading(false);
                const newList = [];
                data.products.map((p) => {
                    newList.push({
                        id: p.id,
                        img: p.thumbnail,
                        price: p.price,
                        name: p.title,
                    })
                });
                console.log(newList);
                setData(newList);

            }).catch((error) => {
                setError(error.message);
                setLoading(false);
            });
        }, 1000)
    }, []);
    const deleteProduct = (id) => {
        setData(old => old.filter(product => product.id !== id));
    };
    return { data, isLoading, deleteProduct }
}

export default FetchProduct;