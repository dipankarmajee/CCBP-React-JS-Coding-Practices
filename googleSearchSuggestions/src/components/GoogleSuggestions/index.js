import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchBarText: ''}

  onSearch = event => {
    this.setState({searchBarText: event.target.value})
  }

  arrowSearch = value => {
    this.setState({searchBarText: value})
  }

  render() {
    const {searchBarText} = this.state
    const {suggestionsList} = this.props

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchBarText.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          className="google-img"
          alt="google logo"
        />
        <div className="search-card">
          <div className="google-search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              onChange={this.onSearch}
              placeholder="Search Google"
              className="search-bar"
              value={searchBarText}
            />
          </div>
          <ul>
            {searchResult.map(each => (
              <SuggestionItem
                suggestionsList={each}
                key={each.id}
                arrowSearch={this.arrowSearch}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
