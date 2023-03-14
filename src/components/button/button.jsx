import './button.css';

import { FiArrowRight } from 'react-icons/fi';

const Button = ({ handleClickGeneretePassword }) => {
    return(
        <button className="button_generate" onClick={ handleClickGeneretePassword }>Generate <FiArrowRight /></button>
    );
}

export default Button;