import './index.css'

const MapImage = props => {
  const {eachVisitedCountry, removeCountry} = props
  const {imageUrl} = eachVisitedCountry
  const onClickRemoveVisitedCountry = () => {
    removeCountry(eachVisitedCountry)
  }
  return (
    <>
      <img src={imageUrl} alt="thumbnail" />
      <p>{eachVisitedCountry.name}</p>
      <button type="button" onClick={onClickRemoveVisitedCountry}>
        Remove
      </button>
    </>
  )
}

export default MapImage
