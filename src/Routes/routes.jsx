import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout/MainLayout'
import AuthLayout from '../Layout/AuthLayout/AuthLayout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import MyProducts from '../Pages/MyProducts'
import MyBids from '../Pages/MyBids'
import CreateProduct from '../Pages/CreateProduct'
import PrivateRoutes from './PrivateRoutes'
import Home from '../Pages/Home'
import ProductDetails from '../Components/Product/ProductDetails'
export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/my-products',
                element: <PrivateRoutes>
                    <MyProducts />
                </PrivateRoutes>
            },
            {
                path: '/my-bids',
                element: <PrivateRoutes>
                    <MyBids />
                </PrivateRoutes>

            },
            {
                path: '/create-procuct',
                element: <PrivateRoutes>
                    <CreateProduct />
                </PrivateRoutes>
            },
            {
                path: '/procuct/details/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
                Component: ProductDetails
            },
        ]

    },
    {
        path: '/auth',
        Component: AuthLayout,
        children: [
            {
                index: true,
                Component: Login
            },
            {
                path: '/auth/register',
                Component: Register
            },
        ]
    }
])