import './index.css'

const TransactionItem = props => {
  const {transactionsList, deleteTransactionHistory} = props
  const {id, title, amount, type} = transactionsList
  const typeFormat = type === 'INCOME' ? 'Income' : 'Expenses'

  const onDelete = () => {
    deleteTransactionHistory(id)
  }
  return (
    <>
      <p>{title}</p>
      <p>Rs {amount}</p>
      <p>{typeFormat}</p>
      <button
        testid="delete"
        onClick={onDelete}
        className="delete-icon"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </>
  )
}

export default TransactionItem
