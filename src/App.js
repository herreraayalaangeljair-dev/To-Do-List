import { useState } from "react";
import Header from "./Components/Header";
import FormularioTareas from "./Components/FormularioTareas";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

const App = () => {
    const [tareas, setTareas] = useState([]);
    return (
        <div className="container">
            <div className="to-do-list-container">
                <div className="header-container">
                    <Header />
                </div>
                <FormularioTareas tareas={tareas} setTareas={setTareas} />
                {tareas.map((tarea) => {
                    return (
                        <div className="task-container" key={tarea.id}>
                            <div className="task-content">
                                <input type="checkbox" className="check-input" />
                                <p className="task-printed">{tarea.texto}</p>
                            </div>
                            <div className="task-actions">
                                <button className="Tareas-btn-editar" aria-label="Editar tarea">
                                    <FontAwesomeIcon icon={faPencil} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;