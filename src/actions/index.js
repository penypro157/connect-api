import APICaller from '../utils/ApiCaller';
import * as actionTypes from './../constants/index'
export const fetchProducts = (products) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        products
    }
}
export const fetchProductsRequest = () => {
    return (dispatch) => {
        APICaller.Call('/products', 'GET', {}).then(result => {
            dispatch(fetchProducts(result.data));
        });
    }
}
export const deleteProduct = (id) => {
    return {
        type: actionTypes.DELETE_PRODUCT,
        id
    }
}
export const deleteProductRequest = (id) => {
    return (dispatch) => {
        return APICaller.Call(`/products/${id}`, 'DELETE', {}).then(result => {
            dispatch(deleteProduct(id));
        });
    }
}
export const addProduct = (product) => {
    return {
        type: actionTypes.ADD_PRODUCT,
        product
    }
}
export const addProductRequest = (product, callback) => {
    return (dispatch) => {
        APICaller.Call(`/products`, 'POST', product).then(result => {
            dispatch(addProduct(result.data));
            if (callback) {
                callback();
            }
        });
    }
}