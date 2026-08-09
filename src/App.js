import { useState } from "react";
import Header from "./Components/Header";
import FormularioTareas from "./Components/FormularioTareas";

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
                    return (<div className="task-container" key={tarea.id}>
                        <p className="task-printed">{tarea.texto}</p>
                        <input type="checkbox" className="check-input" />
                    </div>);
                })}
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;