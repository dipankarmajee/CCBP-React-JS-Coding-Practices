import './index.css'

const TodoItem = props => {
  const {item, deleteTodo} = props
  const {title, id} = item
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <div className="todo-item-container">
      <div>
        <li>
          <p>{title}</p>
        </li>
      </div>
      <div>
        <button type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TodoItem
