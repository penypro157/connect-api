import * as actionTypes from './../constants/index'
import ArrayUtils from './../utils/ArrayUtils'
const initialState = [{
    id: 1,
    name: 'Iphone 6s Plus',
    price: 150,
    status: false
},
{
    id: 2,
    name: 'Iphone XS MAX',
    price: 500,
    status: false
},
{
    id: 3,
    name: 'Iphone 11 Promax',
    price: 700,
    status: false
}];
const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS: {
            state = action.products;
            return [...state];
        }
        case actionTypes.DELETE_PRODUCT: {
            var index = ArrayUtils.findIndexByValue(state, 'id', action.id);
            state.splice(index, 1);
            return [...state];
        }
        case actionTypes.ADD_PRODUCT: {
            state.push(action.product)
            return [...state];
        }
        default: return [...state];
    }
}
export default productReducer;