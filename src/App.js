import { useState } from "react";
import Header from "./Components/Header";
import ListaTareas from "./Components/ListaTareas";
import FormularioTareas from "./Components/FormularioTareas";


const App = () => {
    const [tareas, setTareas] = useState([]);
    const [mostrarCompletada, setMostrarCompletada] = useState(false);

    const toggleCompletada = (id) => {
        setTareas(tareas.map((t) => {
            if (t.id === id) {
                return {
                    ...t,
                    completada: !t.completada
                };
            }
            return t;
        }));
    }
    return (
        <div className="container">
            <div className="to-do-list-container">
                <div className="header-container">
                    <Header mostrarCompletada={mostrarCompletada} setMostrarCompletada={setMostrarCompletada} />
                </div>
                <FormularioTareas tareas={tareas} setTareas={setTareas} />
                <ListaTareas tareas={
                    mostrarCompletada ? tareas : tareas.filter((t) => !t.completada)
                }
                    toggleCompletada={toggleCompletada} />
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;