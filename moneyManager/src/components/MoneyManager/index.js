import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    transactionsList: [],
    balance: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    type: 'INCOME',
  }

  onTitleValue = event => {
    this.setState({title: event.target.value})
  }

  onAmountValue = event => {
    this.setState({amount: event.target.value})
  }

  onTypeValue = event => {
    this.setState({type: event.target.value})
  }

  onSubmitAdd = event => {
    event.preventDefault()
    const {balance, title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title: `${title}`,
      amount: `${amount}`,
      type: `${type}`,
    }
    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      title: '',
      amount: '',
    }))

    if (type === 'INCOME') {
      this.setState(prevState => ({
        income: prevState.income + parseInt(amount),
        balance: prevState.balance + parseInt(amount),
      }))
    } else if (parseInt(balance) >= parseInt(amount)) {
      this.setState(prevState => ({
        balance: prevState.balance - parseInt(amount),
        expense: prevState.expense + parseInt(amount),
      }))
    }
  }

  deleteTransactionHistory = value => {
    const {transactionsList} = this.state
    const newTransactionHistoryList = transactionsList.filter(
      eachHistory => value !== eachHistory.id,
    )
    this.setState({transactionsList: newTransactionHistoryList})

    transactionsList.map(eachItem => {
      if (value === eachItem.id) {
        if (eachItem.type === 'INCOME') {
          this.setState(prevState => ({
            income: prevState.income - parseInt(eachItem.amount),
            balance: prevState.balance - parseInt(eachItem.amount),
          }))
        } else {
          this.setState(prevState => ({
            balance: prevState.balance + parseInt(eachItem.amount),
            expense: prevState.expense - parseInt(eachItem.amount),
          }))
        }
      }
      return null
    })
  }

  render() {
    const {
      balance,
      income,
      expense,
      title,
      amount,
      type,
      transactionsList,
    } = this.state
    return (
      <div className="bg-container">
        <div className="banner">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your money manager</p>
        </div>
        <MoneyDetails balance={balance} income={income} expense={expense} />

        <div className="transaction-history-card">
          <div className="add-transaction-card">
            <h2>Add Transactions</h2>
            <form onSubmit={this.onSubmitAdd}>
              <label>
                TITLE
                <input
                  value={title}
                  type="text"
                  onChange={this.onTitleValue}
                  placeholder="TITLE"
                />
              </label>
              <label>
                AMOUNT
                <input
                  value={amount}
                  type="text"
                  onChange={this.onAmountValue}
                  placeholder="AMOUNT"
                />
              </label>
              <label>
                TYPE
                <select value={type} type="option" onChange={this.onTypeValue}>
                  {transactionTypeOptions.map(each => (
                    <option key={each.optionId} value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </label>
              <div>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>

          <div className="add-transaction-card history-card">
            <h2>History</h2>

            <div>
              <div className="table-heading">
                <p>Title</p>
                <p>Amount</p>
                <p>Type</p>
              </div>

              <ul>
                {transactionsList.map(eachItem => (
                  <li key={eachItem.id}>
                    <TransactionItem
                      transactionsList={eachItem}
                      deleteTransactionHistory={this.deleteTransactionHistory}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
