import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
const FormularioTareas = () => {

    return (
        <div>
            <form className="Formulario-Tareas">
                <input
                    type="text"
                    className="Formulario-Tareas-input"
                    placeholder="Write a task"></input>
                <button
                    type="submit"
                    className="Formulario-Tareas-btn">
                    <FontAwesomeIcon icon={faSquarePlus} /> Add
                </button>
            </form>
        </div>
    )
}

export default FormularioTareas 