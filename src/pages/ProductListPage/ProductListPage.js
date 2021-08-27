import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductItem from '../../components/ProductItem/ProductItem';
import ProductList from '../../components/ProductList/ProductList';
import * as actions from '../../actions/index';
import APICaller from '../../utils/ApiCaller';
class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
        APICaller.Call('/products', 'GET', {}).then(result => {
            this.setState({
                products: result.data
            })
        });
        this.props.fetchProductsRequest();
    }
    render() {
        return (
            <div>
                <div className="row">
                    <div className="form-group">
                        <Link to='/product/add' className="btn btn-primary">
                            Add Product
                        </Link>
                    </div>

                </div>
                <div className="row">
                    <h2>Product List</h2>
                    <hr></hr>
                    <ProductList children={this.showProductList(this.props.products)} />
                </div>
            </div>
        );
    }
    showProductList = (productList) => {
        var result = null;
        result = productList.map((item, index) => {
            return (
                <ProductItem key={index} index={index + 1} product={item} deleteProduct={this.deleteProduct} match={this.props.match} />
            )
        })
        return result;
    }
    deleteProduct = (id) => {
        // eslint-disable-next-line no-restricted-globals
        if (confirm('Do you want to delete ?')) {

            // APICaller.Call(`/products/${id}`, 'DELETE', {}).then(
            //     result => {
            //         return APICaller.Call(`/products`, 'GET', {})
            //     }
            // ).then(result => {
            //     this.setState({
            //         products: result.data
            //     })
            // });
            this.props.deleteProductRequest(id);
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchProductsRequest: () => {
            dispatch(actions.fetchProductsRequest())
        },
        deleteProductRequest: (id,callback) => {
            dispatch(actions.deleteProductRequest(id))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.product
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
