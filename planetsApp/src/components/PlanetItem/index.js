import './index.css'

const PlanetItem = props => {
  const {children} = props

  return (
    <div>
      <h1>PLANETS</h1>
      <div className="children-container">{children}</div>
    </div>
  )
}

export default PlanetItem
