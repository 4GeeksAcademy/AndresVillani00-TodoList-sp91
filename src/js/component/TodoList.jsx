import React, { useState } from "react";

export const TodoList = () => {
    const [ addTarea, setAddTarea ] = useState('');
    const [ tareas, setTareas ] = useState([]);

    const handleAddTarea = (event) => {
        setAddTarea(event.target.value);
    }

    const handleTareas = (event) => {
        if(event.key === "Enter") {
            setTareas(tareas.concat([addTarea]))
            setAddTarea('');
        }
    }

    return (
        <div className="list-group">
            <ul>
                <li className="list-group-item">
                    <input 
                        className="form-control"
                        type="text" 
                        onChange={handleAddTarea} value={addTarea}
                        onKeyDown={handleTareas}
                        placeholder="What needs to be done ?"/>
                </li>
                {tareas.map((tarea, indiceTarea) => (
                    <li key={indiceTarea} className="list-group-item">
                        {tarea} <button type="button" className="btn btn-outline-danger" onClick={() => setTareas(tareas.filter((tarea, indiceTareaActual) => indiceTarea != indiceTareaActual))}><i className="fa-solid fa-trash-can"></i></button>
                    </li>
                ))}
                <div className="list-group-item">{tareas.length} items left</div>
            </ul>
        </div>
    );
}