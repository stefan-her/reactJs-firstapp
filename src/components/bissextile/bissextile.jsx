import PropTypes from 'prop-types';

const Bissextile = (props) => {
    const {year} = props;
    const isLeap = ((year % 4 === 0) && (year % 100 !==0)) || (year % 400 === 0);
    const v = isLeap ? "est": "n'est pas";


    return (
        <div>
            <p>L'année : {year}</p>
            <p>Celle-ci {v} Bissextile</p>
        </div>
    );
}

Bissextile.propTypes = {
    year: PropTypes.number.isRequired
};

export default Bissextile;