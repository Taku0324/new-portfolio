import React from 'react'
import { Link } from 'react-scroll'
import Typed from 'react-typed'


const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>test test test test test test test test test</h1>
                <Typed
                    className="typed-text"
                    strings={["Hi, I'm Taku.", "I'm a web developer.", "こんにちは、匠です。", "ウェブデベロッパーをしています。"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link smooth={true} to="contacts" offset={-110} href="#" className="btn-main-offer">contact-me</Link>
            </div>
        </div>
    )
}

export default Header
