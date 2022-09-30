import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogItem: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const fetchingBlogData = await fetch('https://apis.ccbp.in/blogs')
    const fetchedBlogData = await fetchingBlogData.json()
    const updatedBlogData = fetchedBlogData.map(eachBlogItem => ({
      id: eachBlogItem.id,
      imageUrl: eachBlogItem.image_url,
      avatarUrl: eachBlogItem.avatar_url,
      author: eachBlogItem.author,
      topic: eachBlogItem.topic,
      title: eachBlogItem.title,
    }))
    this.setState({blogItem: updatedBlogData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    return (
      <>
        {isLoading ? (
          <div>
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {blogItem.map(eachItem => (
              <BlogItem blogList={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </>
    )
  }
}

export default BlogList
