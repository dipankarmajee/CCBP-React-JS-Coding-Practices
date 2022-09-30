import {Component} from 'react'
import './index.css'
import LoginBtn from '../Login'

class Home extends Component {
  render() {
    return (
      <div className="bg-container">
        <div className="card">
          <LoginBtn />
        </div>
      </div>
    )
  }
}

export default Home
