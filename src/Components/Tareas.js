import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const Tareas = () => {
    const [editandoTarea, tareaEditada] = useState(false);

    const changeTask = () => {
        tareaEditada(!editandoTarea)
    }

    return (
        <div className="task-actions">
            <button className="Tareas-btn-editar" onClick={() => changeTask()}>
                <FontAwesomeIcon icon={faPencil} />
            </button>
            <button className="Tareas-btn-borrar">
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    )
}

export default Tareas;