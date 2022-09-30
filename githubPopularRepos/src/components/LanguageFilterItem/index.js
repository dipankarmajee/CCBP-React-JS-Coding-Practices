import './index.css'

const LanguageFilterItem = props => {
  const {languageFiltersData, activeTabId, activeTabStatus} = props
  const {id, language} = languageFiltersData
  const buttonClass = activeTabStatus ? 'active-button' : ''
  const onClickActiveTab = () => {
    activeTabId(id)
  }
  return (
    <li>
      <button
        className={`button ${buttonClass}`}
        type="button"
        onClick={onClickActiveTab}
      >
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem
