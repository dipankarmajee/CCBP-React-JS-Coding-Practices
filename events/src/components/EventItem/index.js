import './index.css'

const EventItem = props => {
  const {eventsList, activeEventIdDetails} = props
  const {id, imageUrl, location, name} = eventsList

  const activeEventItem = () => {
    activeEventIdDetails(id)
  }

  return (
    <li>
      <button type="button" onClick={activeEventItem}>
        <img src={imageUrl} alt="event" className="event-item-image" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
