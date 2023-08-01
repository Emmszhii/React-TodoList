

export default function TodoForm({handleSubmit, handleItem, newItem}){

    return (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
            <label htmlFor="">New Item</label>
            <input type="text" 
            value={newItem} 
            onChange={handleItem}
            />
            </div>
            <div className='form-group'>
            <button>Add</button>
            </div>
        </form>
    )
}