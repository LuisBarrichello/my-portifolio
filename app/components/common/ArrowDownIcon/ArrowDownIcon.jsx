import PropTypes from 'prop-types';

function ArrowDownIcon({ className = 'w-6 h-6' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true" 
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );
}

export default ArrowDownIcon;

ArrowDownIcon.propTypes = {
    className: PropTypes.string,
};