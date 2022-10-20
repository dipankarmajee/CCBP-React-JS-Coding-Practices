import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import Tags from './components/Tags'
import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class App extends Component {
  state = {
    activeTag: '',
    taskInput: '',
    tagInput: tagsList[0].optionId,
    tasks: [],
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {taskInput, tagInput} = this.state
    this.setState(prevState => ({
      tasks: [
        ...prevState.tasks,
        {
          taskInput,
          tagInput,
          id: uuidv4(),
        },
      ],
      taskInput: '',
      tagInput: '',
    }))
  }

  onChangeInputValue = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelect = event => {
    this.setState({tagInput: event.target.value})
  }

  onClickActiveTagButton = active => {
    const {tasks} = this.state
    console.log(active)
    const newTasks = tasks.filter(eachItem => eachItem.tagInput === active)
    this.setState({tasks: newTasks})
  }

  render() {
    const {activeTag, taskInput, tagInput, tasks} = this.state
    // const newTasks = tasks.filter(eachItem => eachItem.tagInput === activeTag)
    return (
      <div className="bg-container">
        <div className="sidebar">
          <h2>Create a task!</h2>
          <form onSubmit={this.onSubmitForm}>
            <label>
              Task
              <input
                type="text"
                value={taskInput}
                onChange={this.onChangeInputValue}
                placeholder="Enter the task here"
              />
            </label>
            <label>
              Tags
              <select onChange={this.onChangeSelect}>
                {tagsList.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Add Task</button>
          </form>
        </div>
        <div className="main-content">
          <h2>Tags</h2>
          <ul className="tags-container">
            {tagsList.map(eachItem => (
              <Tags
                key={eachItem.optionId}
                eachItem={eachItem}
                onClickActiveTagButton={this.onClickActiveTagButton}
              />
            ))}
          </ul>
          <h2>Tasks</h2>
          {tasks.length === 0 && <p>No Tasks Added Yet</p>}
          <ul>
            {tasks.map(eachItem => (
              <li key={eachItem.id}>
                <p>{eachItem.taskInput}</p>
                <p>{eachItem.tagInput}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
