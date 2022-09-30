import './index.css'

const CommentItem = props => {
  const {
    commentsList,
    isLikeStatus,
    deleteCommment,
    initialContainerBackgroundClassNames,
  } = props
  const {name, comment, isLike, date, id} = commentsList

  const onClickLike = () => {
    isLikeStatus(id)
  }

  const onClickDelete = () => {
    deleteCommment(id)
  }

  const isLikeIcon = isLike
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  return (
    <div className="comment-profile">
      <div className="text-details-comment">
        <span className="profile-picture">{name[0]}</span>
        <div>
          <p className="name">
            {name} <sub>{date}</sub>{' '}
          </p>
          <p>{comment}</p>
        </div>
      </div>

      <div className="like-delete">
        <button type="button" onClick={onClickLike}>
          <img src={isLikeIcon} alt="like" />
        </button>
        <button testid="delete" type="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  )
}

export default CommentItem
