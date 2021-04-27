import PropTypes from "prop-types";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import {  useMediaQuery } from "react-responsive";
import "./SocialLinks.css";

function SocialLinks({ facebook, twitter, instagram }) {
    let icon_size = "17px";

    if(useMediaQuery({ query: "(min-width: 1000px)" }))  icon_size = "22px";

    return(
        <div className="social">
            <a href={facebook}>
                <IconContext.Provider value={{size: icon_size, className: "icon"}} >
                    <FaFacebookF />
                </IconContext.Provider>
            </a>
            <a href={twitter}>
                <IconContext.Provider value={{size: icon_size, className: "icon"}} >
                    <FaTwitter />
                </IconContext.Provider>
            </a>
            <a href={instagram}>
                <IconContext.Provider value={{size: icon_size, className: "icon"}} >
                    <FaInstagram />
                </IconContext.Provider>
            </a>
        </div>
    );
}

SocialLinks.defaultProps = {
    facebook: "#",
    twitter: "#",
    instagram: "#"
};

SocialLinks.propTypes = {
    facebook: PropTypes.string,
    twitter: PropTypes.string,
    instagram: PropTypes.string
};

export default SocialLinks;