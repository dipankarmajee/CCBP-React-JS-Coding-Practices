import {BsFilterRight, BsSearch} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId, activeSearch} = props

  const searchInput = event => {
    if (event.target.value !== '') {
      if (event.key === 'Enter') {
        activeSearch(event.target.value)
      }
    }
  }

  return (
    <div className="products-header">
      <div className="search-bar">
        <input
          type="search"
          onKeyDown={searchInput}
          //   onChange={searchInput}
          placeholder="Search"
          className="search-input"
        />
        <BsSearch className="search-icon" />
      </div>

      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
