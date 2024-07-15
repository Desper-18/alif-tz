import { useEffect } from 'react';
import ProductCard from '../product-card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/slices/productSlice';

export default function ProductList() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const productStatus = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        if (productStatus === 'idle') {
            dispatch(fetchProducts());
        }
    }, [productStatus, dispatch]);

    let content;

    if (productStatus === 'loading') {
        content = <p>Loading...</p>;
    } else if (productStatus === 'succeeded') {
        content = products.map((product) => <ProductCard key={product.id} product={product} />);
    } else if (productStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <div className="container px-4">
            <h2 className="text-3xl font-bold mb-5">Каталог товаров</h2>
            <div className="grid grid-cols-4 gap-4">{content}</div>
        </div>
    );
}
