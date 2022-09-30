import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div>
        <h1>{courseTitle}</h1>
        <div>
          <AiFillClockCircle color="#171f46" />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <div>
        {tagsList.map(eachTag => (
          <div key={eachTag.id}>
            <p>{eachTag.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CourseTimelineCard
