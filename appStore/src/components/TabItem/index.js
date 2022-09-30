import './index.css'

const TabItem = props => {
  const {tabsList, activeTabSelect, activeTabStatus} = props
  const {tabId, displayText} = tabsList
  const onTabChange = () => {
    activeTabSelect(tabId)
  }
  const tabClass = activeTabStatus ? 'active-tab' : null
  return (
    <li>
      <button
        className={`tab-item-list ${tabClass}`}
        type="button"
        onClick={onTabChange}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
