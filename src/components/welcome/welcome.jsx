import PropTypes from 'prop-types';

const Welcome = (props) => {
    const name = props.name;

    // JSX
    return(
        <p>Bienvenue  {name}</p>
    );

}

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

export default Welcome;