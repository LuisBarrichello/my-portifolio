import PropTypes from 'prop-types';

const Loader = ({itensLoad}) => {
    return (
        <p>Carregando {itensLoad}...</p>
    )
}

export default Loader

Loader.propTypes = {
    itensLoad: PropTypes.string.isRequired
}