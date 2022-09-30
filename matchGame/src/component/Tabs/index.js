import './index.css'

const Tabs = props => {
  const {tabsList, activeTab} = props
  const {displayText, tabId} = tabsList

  const tabButton = () => {
    activeTab(tabId)
  }

  return (
    <li>
      <button className="tab-button" type="button" onClick={tabButton}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
