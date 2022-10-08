import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {
    gradientDirectionsList,
    activeDirectionState,
    activeDirectionButton,
  } = props

  const onClickDirection = () => {
    activeDirectionState(gradientDirectionsList.value)
  }

  console.log(activeDirectionButton)
  return (
    <ListItem>
      <DirectionButton
        type="button"
        activeDirectionButtonClass={activeDirectionButton}
        onClick={onClickDirection}
      >
        {gradientDirectionsList.displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
