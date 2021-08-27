import { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    deleteProduct = () => {
        this.props.deleteProduct(this.props.product.id);
    }
    render() {
        var { id, name, status, price } = this.props.product;
        var { match } = this.props;
        var { index } = this.props;
        return (
            <tr>
                <th scope="row">{index}</th>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}$</td>
                <td>
                    <span className={`label bg-${status ? 'success' : 'warning'}`}>
                        {status ? 'Available' : 'Sold Out'}
                    </span>
                </td>
                <td>
                    <div className="form-group" >
                        <Link className="btn btn-primary" to={`product/edit/${id}`}>
                            Edit
                        </Link>&nbsp;
                        <button type="button" className="btn btn-danger" onClick={this.deleteProduct}>Delete</button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
