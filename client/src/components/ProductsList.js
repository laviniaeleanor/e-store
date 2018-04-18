import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchAllProducts, createProduct } from '../actions/products'
import { Link } from 'react-router-dom'
// import ProductForm from './ProductForm.js'

class ProductsList extends PureComponent {

  componentWillMount() {
    this.props.fetchAllProducts()
  }

  createProduct = (product) => {
    this.props.createProduct(product)
  }

  render() {
    const {products} = this.props
    return (
      <div>
        <h1>All products</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { products.map(product => (<tr key={product.id}>
              <td>{product.id}</td>
              <td>
                  <Link to={ `/products/${product.id}` }>{product.description}</Link>
                </td>
              <td>&euro; {product.price}.00</td>
               <td><button onClick={ () => this.deleteProduct(product.id) }>Delete</button></td>
            </tr>)) }
          </tbody>
				</table>
      </div>
    )
  }
}


const mapStateToProps = function (state) {
  return {
    products: state.products,
  }
}

export default connect(mapStateToProps, {
  fetchAllProducts,
  createProduct,
})(ProductsList)
