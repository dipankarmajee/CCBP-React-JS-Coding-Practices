import './index.css'

const DenominationItem = props => {
  const {each, balance} = props
  const {value, id} = each
  const onWithdraw = () => {
    balance(value)
  }
  return (
    <li>
      <button type="button" onClick={onWithdraw} key={id}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
