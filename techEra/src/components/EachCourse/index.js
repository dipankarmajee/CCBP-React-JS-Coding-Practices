import {Link} from 'react-router-dom'
import './index.css'

const EachCourse = props => {
  const {course} = props

  return (
    <>
      <Link to={`/courses/${course.id}`} className="nav-link">
        <img
          src={course.logo_url}
          alt={course.name}
          className="each-course-logo"
        />
        <p className="course-name">{course.name}</p>
      </Link>
    </>
  )
}

export default EachCourse
