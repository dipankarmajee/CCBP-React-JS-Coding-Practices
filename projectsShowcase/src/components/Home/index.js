import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  MainDiv,
  NavBar,
  LogoImg,
  BottomDiv,
  SelectEl,
  OptionEl,
  ProjectUl,
  ProjectLi,
  ProjectImg,
  ProjectH1,
  LoaderDiv,
  FailDiv,
  FailImg,
  FailH1,
  FailP,
  FailRetry,
} from './styledComponent'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    category: categoriesList[0].id,
    projectData: [],
    apiStatus: apiStatusConstant.initial,
  }

  componentDidMount() {
    this.getData()
  }

  apiSuccess = data => {
    const updateData = data.projects.map(each => ({
      id: each.id,
      name: each.name,
      imageUrl: each.image_url,
    }))
    this.setState({
      projectData: updateData,
      apiStatus: apiStatusConstant.success,
    })
  }

  apiFailure = () => {
    this.setState({apiStatus: apiStatusConstant.failure})
  }

  getData = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {category} = this.state
    const projectsApiUrl = `https://apis.ccbp.in/ps/projects?category=${category}`
    const response = await fetch(projectsApiUrl)
    const data = await response.json()
    if (response.ok) {
      this.apiSuccess(data)
    } else {
      this.apiFailure()
    }
  }

  changeCategory = event => {
    this.setState({category: event.target.value}, this.getData)
  }

  renderSuccessView = () => {
    const {projectData} = this.state
    return (
      <ProjectUl>
        {projectData.map(each => (
          <ProjectLi key={each.id}>
            <ProjectImg src={each.imageUrl} alt={each.name} />
            <ProjectH1>{each.name}</ProjectH1>
          </ProjectLi>
        ))}
      </ProjectUl>
    )
  }

  renderLoadingView = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderDiv>
  )

  onClickRetry = () => {
    this.getData()
  }

  renderFailureView = () => (
    <FailDiv>
      <FailImg
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailH1>Oops! Something Went Wrong</FailH1>
      <FailP>We cannot seem to find the page you are looking for.</FailP>
      <FailRetry onClick={this.onClickRetry}>Retry</FailRetry>
    </FailDiv>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.renderSuccessView()
      case apiStatusConstant.inProgress:
        return this.renderLoadingView()
      case apiStatusConstant.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {category} = this.state
    return (
      <MainDiv>
        <NavBar>
          <LogoImg
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </NavBar>
        <BottomDiv>
          <SelectEl onChange={this.changeCategory} value={category}>
            {categoriesList.map(each => (
              <OptionEl value={each.id} key={each.id}>
                {each.displayText}
              </OptionEl>
            ))}
          </SelectEl>
          {this.renderFinalView()}
        </BottomDiv>
      </MainDiv>
    )
  }
}

export default Home
