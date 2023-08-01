import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// import './App.css'

function App() {
  // const [count, setCount] = useState(0);
  // const handleCount = () => {
  //   setCount(c => c + 1);
  // } // () => setCount((c) => c + 1)

  const [newItem, setNewItem] = useState('');
  const [todos, setTodos] = useState([]);

  const handleItem = (e) =>{
    setNewItem(e.target.value);
  }

  const handleSubmit = (e) =>{
    // prevent refresh
    e.preventDefault(); 
    setTodos((currentTodo)=>{
      return [
        ...currentTodo,
       { id: crypto.randomUUID(), title: newItem ,completed: false }
      ]
    })
    setNewItem('');
  };

  // toggle check input
  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  const deleteTodo = (id) =>{
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id )
    })
  }

  return (
    <>
      <TodoForm handleSubmit={handleSubmit} handleItem={handleItem} newItem={newItem}/>
      <div className='header'><h1>Todo List</h1></div>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        
      
    </>
  )
}

export default App
