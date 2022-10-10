import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <div className="headerDiv1">
                <a href><h2>{props.logo}</h2></a>
            </div>

            <div className="headerDiv2">
                <a href>Home</a>
                <a href>About Us</a>
                <a href>Contact</a>
            </div>
        </div>
    );
}

export default Header;