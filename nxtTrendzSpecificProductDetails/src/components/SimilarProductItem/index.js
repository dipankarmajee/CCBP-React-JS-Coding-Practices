import {BsStarFill} from 'react-icons/bs'

import './index.css'

const SimilarProductItem = props => {
  const {similarProducts} = props

  return (
    <>
      <li className="similar-product-container">
        <img
          src={similarProducts.imageUrl}
          alt={`similar product ${similarProducts.title}`}
          className="similar-product-image"
        />
        <h1 className="similar-product-title">{similarProducts.title}</h1>
        <p className="similar-product-brand">by {similarProducts.brand}</p>
        <div className="price-rating-similar-products">
          <p className="similar-product-price">Rs {similarProducts.price}/-</p>
          <p className="similar-procuct-rating-span-element">
            {similarProducts.rating}
            <BsStarFill className="star-icon" />
          </p>
        </div>
      </li>
    </>
  )
}

export default SimilarProductItem
