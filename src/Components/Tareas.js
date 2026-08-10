import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Tareas = ({ tarea }) => {
    const [editandoTarea, tareaEditada] = useState(false);

    const changeTask = () => {
        tareaEditada(!editandoTarea)
    }

    const edittask = (e) => {
        e.preventDefault();
    }
    return (
        <div className='container-task-actions'>
            {editandoTarea === true
                ?
                <form className="form-task-edit" onSubmit={edittask}>
                    <input type="text" className="change-task-input" />
                    <button type="submit" className="change-task-btn">Guardar</button>
                </form>
                :
                <p className="task-printed"> {tarea.texto}</p>
            }
            <input type="checkbox" className="check-input" />
            <div className="task-actions">
                <button className="Tareas-btn-editar" onClick={() => changeTask()}>
                    <FontAwesomeIcon icon={faPencil} />
                </button>
                <button className="Tareas-btn-borrar">
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
        </div>
    )
}

export default Tareas;