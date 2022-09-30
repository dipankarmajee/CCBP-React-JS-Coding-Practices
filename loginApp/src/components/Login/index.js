import {Component} from 'react'
import './index.css'
import {Welcome, Login} from '../Message'
import LogOutBtn from '../Logout'

class LoginBtn extends Component {
  state = {loginStatus: false}

  loginCall = () => {
    this.setState(() => ({loginStatus: true}))
  }

  //   logOutBtnCall = () => {
  //     const {loginStatus} = this.state
  //     if (loginStatus === true) {
  //       return <Logout />
  //     }
  //   }

  render() {
    const {loginStatus} = this.state
    return (
      <div>
        {!loginStatus ? <Login /> : null}
        {!loginStatus && (
          <button className="button" type="button" onClick={this.loginCall}>
            Login
          </button>
        )}
        {loginStatus && <LogOutBtn />}
      </div>
    )
  }
}

// const LoginBtn = () => (
//   <button className="button" type="button">
//     Login
//   </button>
// )
export default LoginBtn
