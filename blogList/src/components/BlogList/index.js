import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(eachItem => (
        <li key={eachItem.id}>
          <BlogItem blogsItem={eachItem} />
        </li>
      ))}
    </ul>
  )
}

export default BlogList
