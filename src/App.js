import { useState } from "react";
import Header from "./Components/Header";
import ListaTareas from "./Components/ListaTareas";
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
                <ListaTareas tareas={tareas} />
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;