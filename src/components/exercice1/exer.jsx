import PropTypes from 'prop-types';
import style from './exer.module.css'


const Exer = (props) => {
    const {name, age} = props;

    return (
        <div>
            <h1>Bienvenue <span className={style.name}> {name} </span> sur l'application React!</h1>
            <p>vous avez <span className={style.age}> {age} </span> ans</p>
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