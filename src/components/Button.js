import PropTypes from "prop-types";
import "./Button.css";

function Button({ text, link }) {
    return(
        <>
            <a href={link} className="btn">{text}</a>
        </>
    );
}

Button.defaultProps = {
    text: "",
    link: "#"
};

Button.propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
};

export default Button;