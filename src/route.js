import React from 'react'
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/PageNotFound/NotFoundPage";
import ProductActionPage from './pages/ProductActionPage/ProductActionPage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
const routeList = [
    {
        path: '/',
        exact: true,
        component: () => <HomePage />
    },
    {
        path: '/home',
        exact: false,
        component: () => <HomePage />
    },
    {
        path: '/products',
        exact: false,
        component: ({ match }) => <ProductListPage match={match} />
    },
    {
        path: '/product/add',
        exact: false,
        component: ({ history, match }) => <ProductActionPage history={history} match={match} />
    },
    {
        path: '/product/edit/:id',
        exact: false,
        component: ({ history, match }) => <ProductActionPage history={history} match={match}/>
    },
    {
        path: '',
        exact: false,
        component: () => <NotFoundPage />
    },
]
export default routeList;