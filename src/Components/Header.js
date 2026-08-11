import { useState } from 'react';
import '../Style/AppStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({ mostrarCompletada, setMostrarCompletada }) => {
    const [isChecked, setIsChecked] = useState(false);

    const changeChecked = () => {
        setIsChecked(!isChecked);
        setMostrarCompletada(!mostrarCompletada);
    }

    return (
        <header className="header">
            <h1 className="header_title">My To-Do List</h1>

            <button className={`header_button ${isChecked ? 'is-checked' : 'is-unchecked'}`}
                onClick={changeChecked}><FontAwesomeIcon icon={isChecked ? faEye : faEyeSlash} /></button>

        </header>
    );
}

export default Header;