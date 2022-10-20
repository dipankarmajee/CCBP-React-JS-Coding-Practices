import './index.css'

const VisitedCountry = props => {
  const {eachCountryList, visitedCountryList} = props
  console.log(eachCountryList.isVisited)

  const onClickVisitedCountry = () => {
    visitedCountryList(eachCountryList)
  }

  return (
    <>
      <p>{eachCountryList.name}</p>
      {!eachCountryList.isVisited && (
        <button type="button" onClick={onClickVisitedCountry}>
          Visit
        </button>
      )}
      {eachCountryList.isVisited === true && <p>Visited</p>}
    </>
  )
}

export default VisitedCountry
