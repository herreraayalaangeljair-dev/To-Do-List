import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
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
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </form>
        </div>
    )
}

export default FormularioTareas 