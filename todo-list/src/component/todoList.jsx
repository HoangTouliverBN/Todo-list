import React from "react";
import Todo from "./todo";

export default function TodoList(props) {
    // check data truyền xuống bằng console.log trước tiên để định dạng data xem đã đúng mong muốn chưa
    return (
        <div className="item">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Công việc</th>
                        <th scope="col">Hoàn thành</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todoList.map((todoIteams, id) => { // trong loop muốn render function phải có key ở component bao
                        return (<Todo key={id} todos={todoIteams} />) // key ở đây
                    })}
                </tbody>
            </table>
        </div>
    );
}