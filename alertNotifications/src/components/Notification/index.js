import './index.css'

const Notification = props => {
  const {children} = props
  console.log(children)
  return (
    <div className="alert-main-card">
      <div className="alert-card">
        <div className="alert-card alert-icon">{children[0]}</div>
        <div className="alert-card alert-text">
          {children[1]}
          {children[2]}
        </div>
      </div>
      <div>{children[3]}</div>
    </div>
  )
}

export default Notification
