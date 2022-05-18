import Header from "./components/Header"
import TodoInput from "./components/TodoInput"
import Todos from "./components/Todos"
import './index.css'

function App() {

  return (
    <div className="page-container">
      <div className="header">
        <Header/>
      </div>
      <div className="todo-input">
        <TodoInput />
      </div>
      <div className="todos">
        <Todos />
      </div>
    </div>
  )
}

export default App
