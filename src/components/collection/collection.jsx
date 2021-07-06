import PropTypes from 'prop-types';



const Collection = (props) => {
    const lis = props.liste.map((p) => <li key={p.id}>{p.name.charAt(0).toUpperCase() + p.name.substring(1).toLowerCase()}</li>);

    return (
        <>
            <ul>{lis}</ul>
        </>
    );
} 

Collection.propTypes = {
    liste: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))
}

export default Collection;