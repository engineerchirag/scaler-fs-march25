import { useState } from "react"

const Todo = () => {
    const [todos, setTodos] = useState(["Item1", "Item2"]);
    const [newItem, setNewItem] = useState('');


    const addTodo = (e) => {
        if (e.key == "Enter") {
            setTodos([...todos, newItem]);
            setNewItem('');
        }
    }

    const handleChange = (e) => {
        setNewItem(e.target.value);
    }

    const handleRemove = (idx) => {
        const copyTodos = [...todos];
        copyTodos.splice(idx, 1);
        setTodos(copyTodos);
    }

    return (
        <div className="todo">
            <h2>Todo</h2>
            <input 
                placeholder="New todo item..." 
                onChange={handleChange} 
                onKeyUp={addTodo} 
                value={newItem}
            />
            {newItem}
            <ul>
                {
                    todos.map((todo, idx) => (
                        <li>{todo} <button onClick={() => handleRemove(idx)}>-</button></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo;