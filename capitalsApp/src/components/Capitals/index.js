import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].id}

  onChangeSelection = event => {
    this.setState({country: event.target.value})
  }

  countryName = () => {
    const {country} = this.state
    const countryNameText = countryAndCapitalsList.filter(
      each => each.id === country,
    )
    return countryNameText
  }

  render() {
    const countryName = this.countryName()
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Countries and Capitals</h1>
          <div className="form">
            <select id="countryCapital" onChange={this.onChangeSelection}>
              {countryAndCapitalsList.map(each => (
                <option className="option" value={each.id} key={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="countryCapital">
              {' '}
              is capital of which country?
            </label>
          </div>

          <p>{countryName[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
