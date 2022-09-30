import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const apiCallStatusConstant = {
  initial: 'INITIAL',
  progess: 'IN_PROGRESS',
  failure: 'FAILURE',
  success: 'SUCESS',
}

class GithubPopularRepos extends Component {
  state = {
    activeTab: languageFiltersData[0].id,
    apiStatus: apiCallStatusConstant.progess,
    popularRepos: [],
  }

  componentDidMount() {
    this.getGithubReposApiUrl()
  }

  activeTabId = id => {
    this.setState({activeTab: id}, this.getGithubReposApiUrl)
  }

  onFailureApiCall = () => {
    this.setState({apiStatus: apiCallStatusConstant.failure})
  }

  onSuccessApiCall = data => {
    this.setState({
      apiStatus: apiCallStatusConstant.success,
      popularRepos: data,
    })
  }

  getGithubReposApiUrl = async () => {
    this.setState({apiStatus: apiCallStatusConstant.progess})
    const {activeTab} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeTab}`
    const response = await fetch(url)
    const data = await response.json()
    const gitRepo = {
      popularRepo: data.popular_repos,
    }
    if (response.ok === true) {
      this.onSuccessApiCall(gitRepo.popularRepo)
    } else {
      this.onFailureApiCall()
    }
  }

  render() {
    const {apiStatus, popularRepos, activeTab} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="button-container">
          {languageFiltersData.map(eachLanguage => (
            <LanguageFilterItem
              languageFiltersData={eachLanguage}
              key={eachLanguage.id}
              activeTabId={this.activeTabId}
              activeTabStatus={activeTab === eachLanguage.id}
            />
          ))}
        </ul>

        <ul className="popular-repo-container">
          {apiCallStatusConstant.success === apiStatus &&
            popularRepos.map(eachItem => (
              <RepositoryItem popularRepos={eachItem} key={eachItem.id} />
            ))}
        </ul>

        {apiCallStatusConstant.failure === apiStatus && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
            className="failure-view-image"
          />
        )}

        {apiCallStatusConstant.progess === apiStatus && (
          <div>
            <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
