import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="image-container">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
