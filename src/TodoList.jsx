import TodoListItem from "./TodoListItem";

export default function TodoList({todos, toggleTodo, deleteTodo}){
    return (
        <div className='lists'>
            <ul>
            {
            todos.map(todo => {
                return (
                    <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                );
            })
            }
            </ul>
        </div>
    )
}