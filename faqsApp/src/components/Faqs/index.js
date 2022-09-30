import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  state = {isActive: '', id0: false, id1: false, id2: false, id3: false}

  showOrHideText = value => {
    this.setState({isActive: value})
    if (value === 0) {
      this.setState(prevState => ({id0: !prevState.id0}))
    } else if (value === 1) {
      this.setState(prevState => ({id1: !prevState.id1}))
    } else if (value === 2) {
      this.setState(prevState => ({id2: !prevState.id2}))
    } else {
      this.setState(prevState => ({id3: !prevState.id3}))
    }
  }

  render() {
    const {isActive, id0, id1, id2, id3} = this.state
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="faq-card">
          <h1 className="heading">FAQs</h1>
          <ul>
            {faqsList.map(eachItem => (
              <li key={eachItem.id}>
                <FaqItem
                  faqsList={eachItem}
                  showOrHideText={this.showOrHideText}
                  isActive={isActive === eachItem.id}
                  id0={id0}
                  id1={id1}
                  id2={id2}
                  id3={id3}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
