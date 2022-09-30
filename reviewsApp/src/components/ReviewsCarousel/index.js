import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {counter: 0}

  leftButton = () => {
    const {counter} = this.state
    if (counter > 0) {
      this.setState(prevState => ({counter: prevState.counter - 1}))
    }
  }

  rightButton = () => {
    const {counter} = this.state
    const {reviewsList} = this.props
    if (counter < reviewsList.length - 1) {
      this.setState(prevState => ({counter: prevState.counter + 1}))
    }
  }

  render() {
    const {counter} = this.state
    const {reviewsList} = this.props
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="profile-card">
          <button type="button" onClick={this.leftButton} testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>
          <ul>
            <li
              className="profile-container"
              key={reviewsList[counter].username}
            >
              <img
                src={reviewsList[counter].imgUrl}
                className="profile-image"
                alt={reviewsList[counter].username}
              />
              <p className="username">{reviewsList[counter].username}</p>
              <p>{reviewsList[counter].companyName}</p>
              <p>{reviewsList[counter].description}</p>
            </li>
          </ul>
          <button type="button" onClick={this.rightButton} testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
