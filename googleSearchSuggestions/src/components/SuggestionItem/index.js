import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, arrowSearch} = props
  const {suggestion} = suggestionsList
  const arrowClickText = () => {
    arrowSearch(suggestion)
  }
  return (
    <li className="suggestion-list-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        onClick={arrowClickText}
        alt="arrow"
        className="arrow"
      />
    </li>
  )
}

export default SuggestionItem
