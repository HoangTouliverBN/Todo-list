import React, { useState } from 'react';
import './App.css';
import TodoList from './component/todoList';


function App() {
  let [list, setList] = useState([]); // biến đặt tên chữ đầu ko viết hoa
  let [textInput, setTextInput] = useState();
  let [id, setId] = useState(0);
  function onKeyBoard(e) {
    setTextInput(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setId(id + 1);    
    setList([{ id: id, name: textInput, check: false },...list]);
    setTextInput('');
  }



  return (
    <div className="container text-center">

      <label htmlFor="input">Danh sách cần làm</label>

      <form action="" onSubmit={handleSubmit} className="form-inline text-center justify-content-center">

        <input name="inputTodo" id="input" placeholder="Nhập công việc cần làm" value={textInput} onChange={onKeyBoard} className="form-control"></input>
        <button className="btn btn-primary" type="submit" disabled={!textInput}>Thêm mới</button><br />

      </form>

      <TodoList todoList={list}  />
    </div>
  );
}

export default App;
