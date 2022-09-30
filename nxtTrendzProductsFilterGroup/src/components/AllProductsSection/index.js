import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const responseStatus = {
  progess: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class AllProductsSection extends Component {
  state = {
    apiResponseStatus: responseStatus.progess,
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].optionId,
    activeCategoryId: '',
    activeRatingId: '',
    activeSearchInput: '',
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {
      activeOptionId,
      activeCategoryId,
      activeRatingId,
      activeSearchInput,
    } = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${activeSearchInput}&rating=${activeRatingId}`
    // const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        isLoading: false,
        apiResponseStatus: responseStatus.success,
      })
    } else if (response.ok === false) {
      this.setState({
        isLoading: false,
        apiResponseStatus: responseStatus.failure,
      })
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  activeCategory = categoryId => {
    this.setState({activeCategoryId: categoryId}, this.getProducts)
  }

  activeRating = ratingId => {
    this.setState({activeRatingId: ratingId}, this.getProducts)
  }

  activeSearch = searchInput => {
    this.setState({activeSearchInput: searchInput}, this.getProducts)
  }

  clearFilter = () => {
    this.setState(
      {
        // apiResponseStatus: responseStatus.progess,
        // productsList: [],
        // isLoading: false,
        // activeOptionId: sortbyOptions[0].optionId,
        activeCategoryId: '',
        activeRatingId: '',
        activeSearchInput: '',
      },
      this.getProducts,
    )
  }

  renderProductsList = () => {
    const {
      productsList,
      activeOptionId,
      apiResponseStatus,
      activeSearchInput,
    } = this.state
    // console.log(responseStatus)
    // TODO: Add No Products View - DONE
    const noProductFound = () => {
      if (apiResponseStatus === responseStatus.failure) {
        return this.failureView()
      }
      if (productsList.length === 0) {
        return (
          <div className="no-found-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              alt="no products"
              className="no-products-image"
            />
            <h1>No Products Found</h1>
            <p>We could not find any products. Try others filters.</p>
          </div>
        )
      }
      //   if (apiResponseStatus === responseStatus.success) {

      //   }

      return productsList.map(product => (
        <ProductCard productData={product} key={product.id} />
      ))
    }

    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
          activeSearch={this.activeSearch}
          searchValue={activeSearchInput}
        />
        <ul className="products-list">
          {noProductFound()}
          {/* {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))} */}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view
  failureView = () => (
    <div className="failure-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="products-failure-image"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          ratingsList={ratingsList}
          categoryOptions={categoryOptions}
          activeCategory={this.activeCategory}
          activeRating={this.activeRating}
          clearFilter={this.clearFilter}
        />

        {isLoading ? this.renderLoader() : this.renderProductsList()}
      </div>
    )
  }
}

export default AllProductsSection
