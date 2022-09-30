import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {eachItem} = this.props
    const {name, imgUrl, id} = eachItem
    return (
      <li className="img-container">
        <img className="img" src={imgUrl} alt={name} key={id} />
        <p className="img-name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
