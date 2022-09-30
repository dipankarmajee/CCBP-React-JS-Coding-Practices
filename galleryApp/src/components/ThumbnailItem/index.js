import './index.css'

const Gallery = props => {
  const {each, onClickImage, activeImage} = props
  const {thumbnailUrl, id, thumbnailAltText} = each
  const onClickImageChange = () => {
    onClickImage(id)
  }
  const activeImageClass = activeImage ? null : 'opacity'
  return (
    <button type="button" onClick={onClickImageChange}>
      <img
        src={thumbnailUrl}
        alt={thumbnailAltText}
        className={`thumbnail ${activeImageClass}`}
      />
    </button>
  )
}

export default Gallery
