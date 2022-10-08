import './index.css'

import {ChoicesButton} from './styledComponents'

const Choices = props => {
  const {eachItem, onClickChoice} = props
  const activeChoice = () => {
    onClickChoice(eachItem.id)
    console.log(`${eachItem.id.toLowerCase()}Button`)
  }
  return (
    <li>
      <ChoicesButton
        data-testid={`${eachItem.id.toLowerCase()}Button`}
        type="button"
        onClick={activeChoice}
      >
        <img
          src={eachItem.imageUrl}
          alt={eachItem.id}
          className="choice-image"
        />
      </ChoicesButton>
      {/* <button type="button" className="button" onClick={activeChoice}>
        <img
          src={eachItem.imageUrl}
          alt={eachItem.id}
          className="choice-image"
        />
      </button> */}
    </li>
  )
}

export default Choices
