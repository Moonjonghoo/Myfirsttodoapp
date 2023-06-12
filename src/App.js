import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [todate, setTodate] = useState([]);
  const [todolist, setTodolist] = useState([]);
  const submitHandler = () => {
    setTodolist((prevestate) => [
      ...prevestate,
      { id: Math.random(), Todo: todo, date: todate },
    ]);
  };
  return (
    <div className="App">
      <h2>Dummy Todo</h2>
      <form onSubmit={submitHandler}>
        <p>할일</p>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        ></input>
        <p>날짜</p>
        <input
          type="date"
          value={todate}
          onChange={(e) => setTodate(e.target.value)}
        ></input>
        <button type="submit">등록</button>
      </form>
      {console.log(todolist.Todo)}
    </div>
  );
}

export default App;
