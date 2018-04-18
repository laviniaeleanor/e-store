import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchProduct} from '../actions/products'
// import ProductForm from './ProductForm'
import {Link} from 'react-router-dom'

class ProductDetails extends PureComponent {

     componentWillMount(props) {
        this.props.fetchProduct(this.props.match.params.id)
      }

      updateProduct = (product) => {
        this.props.updateProduct(this.props.match.params.id, product)
        this.toggleEdit()
      }

      render() {
          const {product} = this.props
          if (!product) return null

          return (
            <div>
            <Link to={ `/products` }>Home</Link>
              <p>&euro; {product.price}.00</p>
              <img src = { product.picture } alt = {product.description}  style={{maxWidth: 200 + 'px'}}/>
              <p>{product.description}</p>
              <p> For more information about this product contact: {product.email} {product.phone} </p>
              <button>Buy this product</button>
            </div>
          )
        }
      }

      const mapStateToProps = function (state, props) {
        return {
          product: state.product
        }
      }

      export default connect(mapStateToProps, {fetchProduct})(ProductDetails)
