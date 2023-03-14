import { useState } from 'react';

import Button from './components/button/button';
import Container from './components/container';
import Length from './components/length/length';
import Password from './components/password/password';
import Strength from './components/strength/strength';
import DecToHex from './service';

const App = () => {
    const [amount, setAmount] = useState(0);
    const [password, setPassword] = useState('');
    const [security, setSecurity] = useState('-');
    
    const generatePassword = () => {
        let min = 32;
        let max = 126;
        let caracter = '';
        parseInt(amount);
        
        if(amount <= 5) {
            setSecurity('low');
        } else if(amount > 5 && amount <= 10) {
            setSecurity('medium');
        } else {
            setSecurity('strong');
        }

        for (let i = 1; i <= amount; i++) {
            let numberRandom = min + Math.floor((Math.random() * (max - min)));
            caracter += unescape('%' + DecToHex(numberRandom));
        }
        setPassword(caracter);
    }

    return (
        <Container>
            <h2>Password Generator</h2>

            <Password password={ password } />

            <div className="container_options">
                <Length setAmount={ setAmount } amount={ amount } />
                <Strength security={ security } />
                <Button handleClickGeneretePassword={ generatePassword } />  
            </div>
        </Container>
    );
}

export default App;