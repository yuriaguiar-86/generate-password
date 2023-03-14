import './length.css';

const Length = ({ setAmount, amount }) => {
    const handleAmountPassword = (e) => {
        setAmount(e.target.value);
    }

    return (
        <>
            <div className='container_length'>
                <h3>Character Length</h3>
                <p className='length'>{ amount }</p>
            </div>

            <input type="range" min='1' max='25' className='slider' onChange={ handleAmountPassword } />
        </>
    );
}

export default Length;