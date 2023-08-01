export default function TodoListItem({todo, deleteTodo, toggleTodo}){
    return (
        <li className='list-group' >
                    <label>
                    <input type="checkbox" 
                    checked={todo.completed} 
                    onChange={e=> toggleTodo(todo.id, e.target.checked)}
                    />
                    {todo.title}
                    </label>
                    <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
        </li>
    )
}