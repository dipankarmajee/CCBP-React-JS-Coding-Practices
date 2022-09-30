import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import YourPassword from '../YourPassword'
import './index.css'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    counter: 0,
    addNewPasswordList: [],
    isPasswordShowing: false,
    searchInput: '',
  }

  onSearch = event => {
    this.setState(() => ({
      searchInput: event.target.value,
    }))
  }

  onWebsite = event => {
    this.setState({website: event.target.value})
  }

  onUsername = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  onMaskedPassword = () => {
    this.setState(prevState => ({
      isPasswordShowing: !prevState.isPasswordShowing,
    }))
  }

  onAddNewPassword = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordList = {
      id: uuidv4(),
      website: `${website}`,
      username: `${username}`,
      password: `${password}`,
    }
    this.setState(prevState => ({
      addNewPasswordList: [...prevState.addNewPasswordList, newPasswordList],
      website: '',
      username: '',
      password: '',
      counter: prevState.counter + 1,
    }))
  }

  deletePassword = value => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
      addNewPasswordList: prevState.addNewPasswordList.filter(
        eachItem => eachItem.id !== value,
      ),
    }))
  }

  render() {
    const {
      website,
      username,
      password,
      counter,
      addNewPasswordList,
      isPasswordShowing,
      searchInput,
    } = this.state

    const newList = addNewPasswordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const noPasswordEl = (
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
          alt="no passwords"
          className="password-manager"
        />
        <p>No Passwords</p>
      </div>
    )

    const withPasswordEl = (
      <ul>
        {newList.map(eachItem => (
          <li key={eachItem.id}>
            <YourPassword
              addNewPasswordList={eachItem}
              isPasswordShowing={isPasswordShowing}
              deletePassword={this.deletePassword}
            />
          </li>
        ))}
      </ul>
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="add-new-password-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-manager"
          />

          <form
            className="add-new-password-card form"
            onSubmit={this.onAddNewPassword}
          >
            <h3>Add New Password</h3>
            <div className="input-container">
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-icon"
                />
                <input
                  value={website}
                  className="input-bar"
                  onChange={this.onWebsite}
                  placeholder="Enter Website"
                />
              </div>

              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-icon"
                />
                <input
                  value={username}
                  className="input-bar"
                  onChange={this.onUsername}
                  placeholder="Enter Username"
                />
              </div>

              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-icon"
                />
                <input
                  value={password}
                  className="input-bar"
                  onChange={this.onPassword}
                  placeholder="Enter Password"
                  type="password"
                />
              </div>
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>

        <div className="add-new-password-card">
          <div className="you-password-card">
            <h2>Your Passwords</h2>
            <p>{counter}</p>
            <div className="search-card input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="search-icon input-icon"
              />
              <input
                value={searchInput}
                className="search-bar input-bar"
                type="search"
                onChange={this.onSearch}
                placeholder="Search"
              />
            </div>
          </div>

          <hr className="line" />

          <label>
            <input
              value="checkbox"
              type="checkbox"
              onChange={this.onMaskedPassword}
            />
            Show passwords
          </label>

          {newList.length === 0 ? noPasswordEl : withPasswordEl}
        </div>
      </div>
    )
  }
}

export default PasswordManager
