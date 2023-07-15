import './index.css'

const TabItems = props => {
  const {eachItem, UpdateActiveTabId} = props
  const {tabId, displayText} = eachItem

  const getActiveTabId = () => {
    UpdateActiveTabId(tabId)
  }
  return (
    <button type="button" className="tabs-container" onClick={getActiveTabId}>
      <li className="list-tabs">{displayText}</li>
    </button>
  )
}
export default TabItems
