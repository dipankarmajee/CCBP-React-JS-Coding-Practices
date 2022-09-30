import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state

    return (
      <div className="bg-container">
        <div className="cover">
          <h1>
            Bob ate <span className="span-element">{mango}</span> mangoes{' '}
            <span className="span-element">{banana}</span> bananas
          </h1>
          <div className="img-element">
            <div className="fruit-container">
              <img
                className="img"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button onClick={this.eatMango} className="btn" type="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img
                className="img"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button onClick={this.eatBanana} className="btn" type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
