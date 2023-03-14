import './strength.css';

const Strength = ({ security }) => {
    return (
        <div className='container_strength'>
            <p>Strength</p>
            <h3 className={ security }>Security</h3>
        </div>
    );
}

export default Strength;