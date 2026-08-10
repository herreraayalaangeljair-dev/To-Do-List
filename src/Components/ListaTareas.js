import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan, faHeartCrack } from '@fortawesome/free-solid-svg-icons';
const ListaTareas = ({ tareas }) => {

    return (
        tareas.length > 0
            ?
            <div>
                {tareas.map((tarea) => {
                    return (
                        <div className="task-container" key={tarea.id}>
                            <div className="task-content">
                                <input type="checkbox" className="check-input" />
                                <p className="task-printed">{tarea.texto}</p>
                            </div>
                            <div className="task-actions">
                                <button className="Tareas-btn-editar">
                                    <FontAwesomeIcon icon={faPencil} />
                                </button>
                                <button className="Tareas-btn-borrar">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            :
            <div className='Mensaje'><FontAwesomeIcon icon={faHeartCrack} />No hayssss tareddas agregadas</div>
    )
}

export default ListaTareas