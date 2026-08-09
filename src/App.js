import Header from "./Components/Header";
import FormularioTareas from "./Components/FormularioTareas";

const App = () => {
    return (
        <div className="container">
            <div className="to-do-list-container">
                <div className="header-container">
                    <Header />
                </div>
                <FormularioTareas />
            </div>
            <footer className="footer">
                <p className="footer_text">Angel Herrera © 2026</p>
            </footer>
        </div>
    );
}

export default App;