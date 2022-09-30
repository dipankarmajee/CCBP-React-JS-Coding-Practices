import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const dateFormat = formatDistanceToNow(new Date())

class Comments extends Component {
  state = {name: '', comment: '', commentsList: []}

  onClickAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name: `${name}`,
      comment: `${comment}`,
      isLike: false,
      date: `${dateFormat}`,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  isLikeStatus = value => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (value === each.id) {
          return {...each, isLike: !each.isLike}
        }
        return each
      }),
    }))
  }

  deleteCommment = value => {
    const {commentsList} = this.state
    const newCommentList = commentsList.filter(
      eachComment => eachComment.id !== value,
    )
    this.setState({commentsList: newCommentList})
  }

  onNameChange = event => {
    this.setState({name: event.target.value})
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
  }

  render() {
    const {name, comment, commentsList} = this.state
    const commentCounter = commentsList.length
    return (
      <div className="bg-container">
        <h1>Comments</h1>
        <div className="card">
          <form onSubmit={this.onClickAddComment}>
            <p className="form-details">Say Something about 4.0 Technologies</p>
            <input
              value={name}
              type="text"
              placeholder="Your Name"
              onChange={this.onNameChange}
            />
            <textarea
              value={comment}
              type="text"
              placeholder="Your Comment"
              onChange={this.onCommentChange}
            />
            <div>
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="card-image"
          />
        </div>
        <hr className="hr" />
        <div className="comment-list">
          <p className="counter">
            <span>{commentCounter}</span> Comments{' '}
          </p>
          <ul>
            {commentsList.map(eachComment => (
              <li key={eachComment.id}>
                <CommentItem
                  commentsList={eachComment}
                  initialContainerBackgroundClassNames={
                    initialContainerBackgroundClassNames
                  }
                  isLikeStatus={this.isLikeStatus}
                  deleteCommment={this.deleteCommment}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
