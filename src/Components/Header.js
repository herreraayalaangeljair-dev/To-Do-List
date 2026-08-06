import { useState } from 'react';
import '../Style/AppStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isChecked, setIsChecked] = useState(false);

    const changeChecked = () => {
        setIsChecked(!isChecked);
    }

    return (
        <header className="header">
            <h1 className="header_title">Lista de Tareas</h1>
            {
                <button className={`header_button ${isChecked ? 'is-checked' : 'is-unchecked'}`} onClick={changeChecked}><FontAwesomeIcon icon={isChecked ? faCheck : faXmark} /></button>
            }
        </header>
    );
}

export default Header;