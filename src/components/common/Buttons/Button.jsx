import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./Buttons.css"

function Button({className, content, onClick, srcImage, altImage, pathLink, target, download}) {
    const buttonProps = {
        className: className || '', 
        onClick: onClick || (() => {}), 
    };
    
    return (
        <div className={buttonProps.className}>
            <Link to={pathLink} target={target} className='link-button' download={download}>     
                <button onClick={buttonProps.onClick}>
                        <img src={srcImage} alt={altImage} />
                        <span>{content}</span>
                </button>
            </Link>
        </div>
    )
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    srcImage: PropTypes.string,
    altImage: PropTypes.string,
    pathLink: PropTypes.string,
    target: PropTypes.string,
    download: PropTypes.bool,
}

export default Button