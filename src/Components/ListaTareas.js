import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';
import Tareas from './Tareas';
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
                            <Tareas />
                        </div>
                    );
                })}sssss
            </div>
            :
            <div className='Mensaje'><FontAwesomeIcon icon={faHeartCrack} />No hay tareas agregadas</div>
    )
}

export default ListaTareas;