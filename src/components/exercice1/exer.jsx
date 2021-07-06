import PropTypes from 'prop-types';


const Exer = (props) => {
    const {name, age} = props;

    return (
        <div>
            <h1>Bienvenue {name} sur l'application React!</h1>
            <p>vous avez {age} ans</p>
        </div>
    );
}

Exer.defaultProps = {
    age: 18
}

Exer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default Exer;