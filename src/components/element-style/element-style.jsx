import PropTypes from 'prop-types';

import style from './element-style.module.css';


const ElementStyle = (props) => {
    const {nb1, nb2} = props;
    const result = nb1 + nb2;
 
    return (
        <p>le resultat de <span className={style.nb}>{nb1}</span> + 
        <span className={style.nb}>{nb2} </span> = 
        <span className={style.result}>{result}</span></p>
    );
}

ElementStyle.defaultProps = {
    nb1: 1,
    nb2: 1
};

ElementStyle.propTypes = {
    nb1: PropTypes.number,
    nb2: PropTypes.number
};

export default ElementStyle