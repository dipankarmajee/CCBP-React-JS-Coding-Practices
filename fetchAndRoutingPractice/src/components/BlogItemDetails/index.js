import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItemDetails: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const fetchingBlogItemDetails = await fetch(
      `https://apis.ccbp.in/blogs/${match.params.id}`,
    )
    const fetchedBlogItemDetails = await fetchingBlogItemDetails.json()
    console.log(fetchedBlogItemDetails)
    const updateBlogItemDetails = {
      id: fetchedBlogItemDetails.id,
      imageUrl: fetchedBlogItemDetails.image_url,
      avatarUrl: fetchedBlogItemDetails.avatar_url,
      author: fetchedBlogItemDetails.author,
      title: fetchedBlogItemDetails.title,
      content: fetchedBlogItemDetails.content,
    }
    this.setState({blogItemDetails: updateBlogItemDetails, isLoading: false})
  }

  render() {
    const {isLoading, blogItemDetails} = this.state
    const {id, title, author, imageUrl, avatarUrl, content} = blogItemDetails

    return (
      <div className="blog-details-container" key={id}>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-container">
            <h1 className="blog-details-title">{title}</h1>
            <div className="profile-section blog-details-profile-section">
              <img src={avatarUrl} alt="avatar" className="avatar" />
              <p>{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="blog-specific-img" />
            <p className="content-text">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
