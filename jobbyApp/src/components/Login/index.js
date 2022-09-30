import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: ''}

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  //   onClickLogin = () => {
  //     const {history} = this.props
  //     history.replace('/')
  //   }

  onSubmitFailure = errorResponse => {
    this.setState({errorMsg: errorResponse})
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    const {username, password, errorMsg} = this.state
    return (
      <div className="login-bg-container">
        <form className="login-card" onSubmit={this.onSubmitLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="login-website-logo"
          />
          <label>
            USERNAME
            <input
              type="text"
              value={username}
              className="input-element"
              onChange={this.onChangeUsername}
              placeholder="Username"
            />
          </label>
          <label>
            PASSWORD
            <input
              type="password"
              value={password}
              className="input-element"
              onChange={this.onChangePassword}
              placeholder="Password"
            />
          </label>
          <button className="login-button" type="submit">
            Login
          </button>
          {errorMsg !== '' && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
