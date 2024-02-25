/*
import { useRef } from 'react';

function App() {
  const titleInput = useRef(null);
  const descriptionInput = useRef(null);
  const todoList = useRef(null);

  const addTodo = () => {
    const title = titleInput.current.value;
    const description = descriptionInput.current.value;
    if (!title || !description) {
      alert('Please enter both a title and a description.');
      return;
    }
    const todoItem = document.createElement('div');
    todoItem.innerHTML = `<h3>${title}</h3><p>${description}</p>`;
    todoList.current.appendChild(todoItem);
    titleInput.current.value = '';
    descriptionInput.current.value = '';
  };

  return (
    <div>
      <input ref={titleInput} type="text" placeholder="Title" />
      <input ref={descriptionInput} type="text" placeholder="Description" />
      <button onClick={addTodo}>Add TODO</button>
      <div ref={todoList}></div>
    </div>
  );
}

export default App;
*/

import {useState} from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodo = () => {
    if(!title || !description) {
      alert('Please enter both a title and a description.');
      return;
    }
    const newTodo = {title, description};
    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };
  return (
    <div>
      <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" placeholder="Title" />
      <input value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Description" />
      <button onClick={addTodo}>Add Todo</button>
        <div>
        {todos.map((todo,index) => (
          <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            </div>
        ))}
        </div>
      </div>
    );
}

export default App;