import "../../App.css";
import React, {useState} from "react"

import icon from "../../assets/icon3.png"

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
        <div className="body">
            <div className="body__logotip">
                <img src={icon} style={{width: 80}}/>
            </div>
            <nav className={`body__navbar ${open ? "active" : ""}`} id="menu">
                <ul className="body__list">
                    <li className="body__item">
                        <a href="#home" className="body__link">download</a>
                    </li>
                    <li className="body__item">
                        <a href="#main" className="body__link">main</a>
                    </li>
                    <li className="body__item">
                        <a href="#information" className="body__link">information</a>
                    </li>
                </ul>
            </nav>
            <div className="body__icon">
                <a className="social1" href="https://www.facebook.com/Rybachyki">
                    <span className="fab fa-facebook"></span>
                </a>
                <div className="fas fa-bars" id="bars" onClick={() => setOpen(!open)}></div>
            </div>
        </div>
    </header>
  );
}

export default Header