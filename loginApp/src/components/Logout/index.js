import {Component} from 'react'
import './index.css'
import {Welcome, Login} from '../Message'
// import LoginBtn from '../Login'

class LogOutBtn extends Component {
  state = {logutStatus: false}

  logoutCall = () => {
    this.setState(() => ({logutStatus: true}))
  }

  render() {
    const {logutStatus} = this.state
    return (
      <div>
        {logutStatus ? null : <Welcome />}
        {!logutStatus ? null : <Login />}
        <button className="button" type="button" onClick={this.logoutCall}>
          {logutStatus ? 'Login' : 'Logout'}
        </button>
      </div>
    )
  }
}

export default LogOutBtn
