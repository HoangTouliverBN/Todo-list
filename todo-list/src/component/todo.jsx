import React, { useEffect, useState }  from "react";

export default function Todo({ todos }) {
    let [value,setValue] = useState("Chưa hoàn thành")
    let [checked,setChecked] = useState(false);

    function handleChange() {
        setChecked(!checked);

    }

    useEffect(()=>{
        if(checked){
            setValue("Đã hoàn thành");
        } else {
            setValue("Chưa hoàn thành");
        }
    })



    return (
            <tr>
                <td>{todos.name}</td>
                <td>{value} </td>
                <td><input name="checked" type="checkbox" onChange={handleChange} checked={checked} /></td>
            </tr>
    );
}