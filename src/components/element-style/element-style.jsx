import PropTypes from 'prop-types';


const ElementStyle = (props) => {
    const {nb1, nb2} = props;
    const result = nb1 + nb2;
 
    return (
        <p>le resultat de {nb1} + {nb2} = {result}</p>
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