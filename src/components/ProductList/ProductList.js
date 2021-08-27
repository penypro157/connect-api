import { Component } from 'react';
import ProductItem from '../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Code</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.children}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductList;
