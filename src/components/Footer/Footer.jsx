import './Footer.css'
import logo from "../../assets/LOGOfooter.png"

const Footer = () => {
    return (
        <div className="Footer">
            <img src={logo}></img>
            <h3>© 2020 Kasa. All rights reserved</h3>
        </div>
    )
}

export default Footer