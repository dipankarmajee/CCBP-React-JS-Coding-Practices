import './index.css'

const RepositoryItem = props => {
  const {popularRepos} = props
  const updatedPopularRepos = {
    avatarUrl: popularRepos.avatar_url,
    forksCount: popularRepos.forks_count,
    issuesCount: popularRepos.issues_count,
    name: popularRepos.name,
    starsCount: popularRepos.stars_count,
  }

  const {
    avatarUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = updatedPopularRepos
  return (
    <li className="popular-repo-item">
      <img src={avatarUrl} alt={name} className="repo-image" />
      <h3 className="repo-name">{name}</h3>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="icon-image"
        />
        {starsCount} stars
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="icon-image"
        />
        {forksCount} forks
      </p>
      <p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="icon-image"
        />
        {issuesCount} open issues
      </p>
    </li>
  )
}

export default RepositoryItem
