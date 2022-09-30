import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', errorText: ''}

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  matchHistory = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const fetchingData = await fetch(url, options)
    const fetchedData = await fetchingData.json()
    if (fetchingData.ok === true) {
      this.matchHistory()
      this.setState({errorText: ''})
    } else {
      this.setState({errorText: fetchedData.error_msg})
    }
  }

  render() {
    const {username, password, errorText} = this.state
    return (
      <div className="login-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-logo-sm"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="website-login"
        />
        <div className="form-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-logo-lg"
          />
          <form className="form-element" onSubmit={this.onLoginSubmit}>
            <label className="label-element">
              USERNAME
              <input
                type="text"
                value={username}
                placeholder="Username"
                className="input-element"
                onChange={this.onUsername}
              />
            </label>
            <label className="label-element">
              PASSWORD
              <input
                type="password"
                value={password}
                placeholder="Password"
                className="input-element"
                onChange={this.onPassword}
              />
            </label>
            <button type="submit" className="login-btn">
              Login
            </button>
            <p className="error-text">{errorText}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
