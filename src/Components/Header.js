import '../Style/AppStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ mostrarCompletada, setMostrarCompletada }) => {

    const changeChecked = () => {
        setMostrarCompletada(!mostrarCompletada);
    }

    return (
        <header className="header">
            <h1 className="header_title">My To-Do List</h1>

            <button className={`header_button ${mostrarCompletada ? 'is-checked' : 'is-unchecked'}`}
                onClick={changeChecked}><FontAwesomeIcon icon={mostrarCompletada ? faEye : faEyeSlash} /></button>

        </header>
    );
}

export default Header; 