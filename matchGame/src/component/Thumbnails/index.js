import './index.css'

const Thumbnails = props => {
  const {thumbnailsList, thumbnailClick} = props
  const {id, thumbnailUrl} = thumbnailsList

  const onThumbnail = () => {
    thumbnailClick(id)
  }
  return (
    <button type="button" onClick={onThumbnail} className="thumbnail-button">
      <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
    </button>
  )
}

export default Thumbnails
