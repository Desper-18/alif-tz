import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../store/slices/productSlice';

export default function ProductView() {
    const dispatch = useDispatch();
    const id = useParams();
    const product = useSelector((state) => {
        return state.products.products.find((product) => product.id === parseInt(id));
        if (state.products.status === 'succeeded') {
            return state.products.products.find((product) => product.id === parseInt(id));
        } else {
            dispatch(fetchProducts());
            return state.products.products.find((product) => product.id === parseInt(id));
        }
    });
    console.log(product);

    if (!product) {
        return <p>Product not found</p>;
    }

    return <div>{product.title}</div>;
}
