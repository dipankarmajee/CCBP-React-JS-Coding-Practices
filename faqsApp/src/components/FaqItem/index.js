import './index.css'

const FaqItem = props => {
  const {faqsList, showOrHideText, id0, id1, id2, id3} = props
  const {id, questionText, answerText} = faqsList
  const onToggle = () => {
    showOrHideText(id)
  }
  let displayClass
  let buttonIcon = (
    <img
      src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
      alt="plus"
      className="icon"
    />
  )
  if (id === 0) {
    displayClass = id0 ? 'show' : 'hide'
    buttonIcon = !id0 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
        className="icon"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
        className="icon"
      />
    )
  } else if (id === 1) {
    displayClass = id1 ? 'show' : 'hide'
    buttonIcon = !id1 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
        className="icon"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
        className="icon"
      />
    )
  } else if (id === 2) {
    displayClass = id2 ? 'show' : 'hide'
    buttonIcon = !id2 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
        className="icon"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
        className="icon"
      />
    )
  } else if (id === 3) {
    displayClass = id3 ? 'show' : 'hide'
    buttonIcon = !id3 ? (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        alt="plus"
        className="icon"
      />
    ) : (
      <img
        src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
        alt="minus"
        className="icon"
      />
    )
  }

  return (
    <div>
      <div className="heading-button">
        <h1 className="question">{questionText}</h1>
        <button className="button" type="button" onClick={onToggle}>
          {buttonIcon}
        </button>
      </div>
      <div className={displayClass}>
        <hr className="line" />
        <p className="answer">{answerText}</p>
      </div>
    </div>
  )
}

export default FaqItem
