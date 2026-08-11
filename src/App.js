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

    const editarTexto = (id, nuevoTexto) => {
        setTareas(tareas.map((t) => {
            if (t.id === id) {
                return {
                    ...t,
                    texto: nuevoTexto
                };
            }
            return t;
        }));
    }

    const borrarTarea = (id) => {
        setTareas(tareas.filter((t) => {
            if (t.id !== id) {
                return t;
            }
            return;
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
                    toggleCompletada={toggleCompletada}
                    editarTexto={editarTexto}
                    borrarTarea={borrarTarea} />
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;