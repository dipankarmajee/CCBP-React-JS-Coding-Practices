import './index.css'

const FiltersGroup = props => {
  const {activeCategory, activeRating, clearFilter} = props
  const renderCategoryOptions = () => {
    const {categoryOptions} = props
    return categoryOptions.map(eachCategory => {
      const {categoryId, name} = eachCategory
      const onClickCategory = () => {
        activeCategory(categoryId)
      }
      return (
        <li key={categoryId}>
          <button
            type="button"
            className="filter-group-button"
            onClick={onClickCategory}
          >
            <p>{name}</p>
          </button>
        </li>
      )
    })
  }

  const renderRatingsList = () => {
    const {ratingsList} = props
    return ratingsList.map(eachRating => {
      const {imageUrl, ratingId} = eachRating
      const onClickRating = () => {
        activeRating(ratingId)
      }
      return (
        <li key={ratingId}>
          <button
            type="button"
            className="filter-group-button"
            onClick={onClickRating}
          >
            <img
              src={imageUrl}
              alt={`rating ${ratingId}`}
              className="rating-image"
            />{' '}
            & up
          </button>
        </li>
      )
    })
  }

  const onClickClearFilter = () => {
    // activeCategory('')
    // activeRating('')
    // activeSearch('')
    // changeSortby('PRICE_HIGH')
    clearFilter()
  }

  return (
    <div className="filters-group-container">
      <h3>Category</h3>
      <ul className="unordered-list-container">{renderCategoryOptions()}</ul>
      <h3>Rating</h3>
      <ul className="unordered-list-container">{renderRatingsList()}</ul>
      <button
        type="button"
        className="clear-filter"
        onClick={onClickClearFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
