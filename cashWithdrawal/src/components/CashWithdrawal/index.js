import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  balance = value => {
    this.setState(prevState => ({bal: prevState.bal - value}))
  }

  render() {
    const {bal} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg-container">
        <div className="card">
          <div className="name-container">
            <div className="profile-pic">S</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="your-balance">Your Balance</p>
            <div className="balance-info">
              <p className="balance">{bal}</p>
              <p className="balance-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw">Withdraw</p>
            <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
            <ul className="button-container">
              {denominationsList.map(each => (
                <DenominationItem
                  each={each}
                  key={each.id}
                  balance={this.balance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
