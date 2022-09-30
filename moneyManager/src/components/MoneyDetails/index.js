import './index.css'

const MoneyDetails = props => {
  const {balance, income, expense} = props
  return (
    <div className="money-details-card">
      <div className="balance card">
        <div>
          <img
            className="money-details-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balance}</p>
        </div>
      </div>
      <div className="income card">
        <div>
          <img
            className="money-details-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {income}</p>
        </div>
      </div>
      <div className="expense card">
        <div>
          <img
            className="money-details-icon"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expense}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
