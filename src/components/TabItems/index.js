import './index.css'

const TabItems = props => {
  const {eachItem, UpdateActiveTabId, activeTabId} = props
  const {tabId, displayText} = eachItem
  const classToApply = activeTabId === tabId ? 'classOne' : 'classTwo'
  const getActiveTabId = () => {
    UpdateActiveTabId(tabId)
  }
  return (
    <li>
      <button type="button" className={classToApply} onClick={getActiveTabId}>
        <li className="list-tabs">{displayText}</li>
      </button>
    </li>
  )
}
export default TabItems
