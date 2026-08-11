import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const FormularioTareas = ({ tareas, setTareas }) => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setTareas(
            [
                ...tareas,
                {
                    id: uuidv4(),
                    texto: input,
                    completada: false
                }
            ]
        )
        setInput('');
    }

    return (
        <div>
            <form className="Formulario-Tareas" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="Formulario-Tareas-input"
                    placeholder="Write a task"
                    value={input}
                    onChange={(e) => handleInput(e)}
                    required
                ></input>
                <button
                    type="submit"
                    className="Formulario-Tareas-btn">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    )
}

export default FormularioTareas; 