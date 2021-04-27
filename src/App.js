import './App.css';
import Bgsvg from './components/Bgsvg';
import Logo from "./images/logo.svg";
import Mockup from "./images/illustration-mockups.svg";
import Button from './components/Button';
import SocialLinks from './components/SocialLinks';


function App() {
    return (
        <div className="App">
            <Bgsvg />
            <div className="container">
                <header>
                    <img src={Logo} alt="Brand Logo"/>
                </header>

                <section className="hero">
                    <img src={Mockup} alt="Illustration Mockup"/>
                    <div className="info">
                        <h1>Build The Community your Fans Will Love</h1>
                        <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
                        <Button text="Register" />
                    </div>
                </section>

                <section className="social-links">
                    <SocialLinks />
                </section>
            </div>
        </div>
    );
}

export default App;
