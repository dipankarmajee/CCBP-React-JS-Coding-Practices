import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="app-item">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
