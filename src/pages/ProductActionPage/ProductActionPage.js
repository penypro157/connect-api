import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import APICaller from '../../utils/ApiCaller';
import * as actions from './../../actions/index'

class ProductActionPage extends Component {
    id = 0;
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            price: 0,
            status: false
        }
        this.id = this.props.match.params.id;
        if (this.id) {
            debugger
            APICaller.Call(`/products/${this.id}`, 'GET', {}).then(
                result => {
                    var { name, price, status } = result.data;
                    this.setState({
                        name, price, status
                    })
                }
            )
        }
    }
    onElementChange = (event) => {
        debugger
        var name = event.target.name;
        var value = event.target.type === "checkbox" ? event.target.defaultChecked : event.target.value;
        this.setState({
            [name]: value
        })
    }
    onSave = (event) => {
        debugger
        event.preventDefault();
        var product = this.state;
        if (!this.id) {
            this.props.addProduct(product, () => {
                this.props.history.push('/products')
            })
            // APICaller.Call('/products', 'POST', product).then(
            //     result => this.props.history.push('/products')
            // ).catch(
            //     err => console.log(err)
            // )
        } else {
            APICaller.Call(`/products/${this.id}`, 'PUT', product).then(
                result => this.props.history.push('/products')
            ).catch(
                err => console.log(err)
            )
        }

    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <h2>Add Product</h2>
                <hr></hr>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={this.state.name} name="name" className="form-control" onChange={this.onElementChange} />
                    </div>
                    <div className="form-group">
                        <label >Price</label>
                        <input type="number" name="price" value={this.state.price} className="form-control" min={0} max={10000} onChange={this.onElementChange} />
                    </div>
                    <div className="form-group">
                        <label >Status</label>
                        <select className="custom-select my-1 mr-sm-2" value={this.state.status} name='status' onChange={this.onElementChange}>
                            <option value={true}>Available</option>
                            <option value={false}>Sold Out</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn btn-primary" onClick={this.onSave}>Save</button>
                        &nbsp;
                        <Link to='/products' className="btn btn-warning">
                            Back
                        </Link>
                    </div>
                </form>

            </div>


        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (product, callback) => {
            dispatch(actions.addProductRequest(product, callback))
        }
    }
}
// const mapStateToProps = (state) => {
//     return {
//         product: state.product
//     }
// }
export default connect(null, mapDispatchToProps)(ProductActionPage);
