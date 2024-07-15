import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductList from '../components/product-list';
import ProductView from '../components/product-view';

const routes = [
    {
        path: '/',
        element: <ProductList />,
    },
    {
        path: '/:id',
        element: <ProductView />,
    },
];

export function AppRoutes() {
    return (
        <>
            <Router>
                <Routes>
                    {routes.map((route, i) => (
                        <Route key={i} {...route} />
                    ))}
                </Routes>
            </Router>
        </>
    );
}
