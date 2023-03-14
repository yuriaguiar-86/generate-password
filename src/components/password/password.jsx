import './password.css';

import { FaRegCopy } from 'react-icons/fa';

const Password = ({ password }) => {
    const handleClickCopy = () => {
        navigator.clipboard.writeText(password);
        alert('Copy with success!');
    }

    return (
        <div className="container_password"> 
            <h1>{ password }</h1>
            <FaRegCopy className='icon_copy' onClick={ password && handleClickCopy } />   
        </div>
    );
}

export default Password;