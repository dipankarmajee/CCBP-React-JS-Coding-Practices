import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHeads: 0, headCounts: 0, tailsCount: 0}

  tossResultBtn = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({headCounts: prevState.headCounts + 1}))
    } else {
      this.setState(prevState => ({tailsCount: prevState.tailsCount + 1}))
    }

    this.setState({isHeads: tossResult})
  }

  tossImage = () => {
    const {isHeads} = this.state
    return isHeads === 0
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
  }

  render() {
    const {headCounts, tailsCount} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1>Coin Toss Game</h1>
          <p className="heads-or-tails">Heads (or) Tails</p>
          <img
            src={this.tossImage()}
            alt="toss result"
            className="toss-image"
          />
          <div>
            <button type="button" onClick={this.tossResultBtn}>
              Toss Coin
            </button>
          </div>

          <div className="info">
            <p>Total:{headCounts + tailsCount}</p>
            <p>Heads:{headCounts}</p>
            <p>Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
