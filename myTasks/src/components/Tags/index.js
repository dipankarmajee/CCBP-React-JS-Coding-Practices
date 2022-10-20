import './index.css'

const Tags = props => {
  const {eachItem, onClickActiveTagButton} = props
  const onClickTagButton = () => {
    onClickActiveTagButton(eachItem.optionId)
  }
  return (
    <li>
      <button type="button" onClick={onClickTagButton}>
        {eachItem.displayText}
      </button>
    </li>
  )
}

export default Tags
