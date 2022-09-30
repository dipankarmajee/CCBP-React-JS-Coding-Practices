import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsStarFill, BsPlusSquare, BsDashSquare} from 'react-icons/bs'

import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'

import './index.css'

const apiStatusConstant = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  onSuccess: 'SUCCESS',
  onFailure: 'FAILURE',
}

class ProductItemDetails extends Component {
  state = {
    productDetails: [],
    similarProdcts: [],
    apiStatus: apiStatusConstant.initial,
    productCount: 1,
  }

  componentDidMount() {
    this.getProductItemDetailsApi()
  }

  getProductItemDetailsApi = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwt = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
    }
    const url = `https://apis.ccbp.in/products/${id}`
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === false) {
      this.setState({apiStatus: apiStatusConstant.onFailure})
      this.renderFailureView()
    } else if (response.ok === true) {
      const updatedProdctDetails = {
        availability: data.availability,
        brand: data.brand,
        description: data.description,
        id: data.id,
        imageUrl: data.image_url,
        price: data.price,
        rating: data.rating,
        title: data.title,
        totalReviews: data.total_reviews,
      }

      const updatedSimilarProducts = data.similar_products.map(eachProduct => ({
        availability: eachProduct.availability,
        brand: eachProduct.brand,
        description: eachProduct.description,
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        price: eachProduct.price,
        rating: eachProduct.rating,
        title: eachProduct.title,
        totalReviews: eachProduct.total_reviews,
      }))
      this.setState({
        productDetails: updatedProdctDetails,
        similarProdcts: updatedSimilarProducts,
        apiStatus: apiStatusConstant.onSuccess,
      })
      this.renderSuccessView()
    }
  }

  onClickDecreament = () => {
    const {productCount} = this.state
    if (productCount > 1) {
      this.setState(prevState => ({productCount: prevState.productCount - 1}))
    }
  }

  onClickIncreament = () => {
    this.setState(prevState => ({productCount: prevState.productCount + 1}))
  }

  renderSuccessView = () => {
    const {productDetails, similarProdcts, productCount} = this.state
    return (
      <>
        <Header />
        <div className="product-item-details-container">
          <div className="product-details-container">
            <img
              src={productDetails.imageUrl}
              alt="product"
              className="product-item-image"
            />
            <div>
              <h1 className="product-details-heading">
                {productDetails.title}
              </h1>
              <p className="product-details-price">
                Rs {productDetails.price}/-
              </p>
              <p className="rating-total-review-text">
                <p className="rating-span-element">
                  <p>{productDetails.rating}</p>
                  <BsStarFill className="star-icon" />
                </p>
                <p>{productDetails.totalReviews}</p> Reviews
              </p>
              <p className="product-description">
                {productDetails.description}
              </p>
              <p className="genetal-info-text">
                <span className="product-span-element">Availability:</span>{' '}
                {productDetails.availability}
              </p>
              <p className="genetal-info-text">
                <span className="product-span-element">Brand:</span>{' '}
                {productDetails.brand}
              </p>
              <div className="increase-decrease-container">
                <button
                  testid="minus"
                  type="button"
                  className="items-count-button"
                  onClick={this.onClickDecreament}
                >
                  <BsDashSquare />
                </button>

                <p className="item-count-value">{productCount}</p>

                <button
                  testid="plus"
                  type="button"
                  className="items-count-button"
                  onClick={this.onClickIncreament}
                >
                  <BsPlusSquare />
                </button>
              </div>

              <button className="add-to-card-button" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <h1>Similar Products</h1>
          <ul className="similar-products-container">
            {similarProdcts.map(eachSimillarProduct => (
              <SimilarProductItem
                similarProducts={eachSimillarProduct}
                key={eachSimillarProduct.id}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }

  onClickContinueShopping = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <>
      <Header />
      <div className="failure-view-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          alt="failure view"
          className="error-view-image"
        />
        <h1>Product Not Found</h1>

        <button type="button" onClick={this.onClickContinueShopping}>
          Continue Shopping
        </button>
      </div>
    </>
  )

  renderLoadingView = () => (
    <div testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.onSuccess:
        return this.renderSuccessView()
      case apiStatusConstant.onFailure:
        return this.renderFailureView()
      default:
        return this.renderLoadingView()
    }
  }
}

export default ProductItemDetails
