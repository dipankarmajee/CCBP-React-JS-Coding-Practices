import './index.css'

const BlogItem = props => {
  const {blogsItem} = props
  const {title, description, publishedDate} = blogsItem
  return (
    <>
      <div>
        <h1 className="blog-item-title">{title}</h1>
        <p className="blog-item-description">{description}</p>
      </div>
      <p className="blog-item-published-date">{publishedDate}</p>
    </>
  )
}

export default BlogItem
