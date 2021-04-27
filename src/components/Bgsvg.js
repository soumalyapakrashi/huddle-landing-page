import MobileBG from "../images/bg-mobile.svg";
import DesktopBG from "../images/bg-desktop.svg";
import "./Bgsvg.css";

function Bgsvg() {
    const stylesDesktop = {
        backgroundImage: `url(${DesktopBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover"
    };

    const stylesMobile = {
        backgroundImage: `url(${MobileBG})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "contain"
    }

    return(
        <>
            <div className="bg-svg" style={stylesMobile}></div>

            <div className="bg-svg" style={stylesDesktop}></div>
        </>
    );
}

export default Bgsvg;