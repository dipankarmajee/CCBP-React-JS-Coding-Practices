import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogList} = props
  const {id, title, author, imageUrl, avatarUrl, topic} = blogList
  return (
    <Link className="blog-link" to={`/blogs/${id}`}>
      <li className="list-container">
        <div>
          <img src={imageUrl} alt={title} className="blog-thumbnail" />
        </div>
        <div className="blog-info">
          <p className="blog-item-topic">{topic}</p>
          <h1>{title}</h1>
          <div className="profile-section">
            <img src={avatarUrl} alt="avatar" className="avatar" />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
