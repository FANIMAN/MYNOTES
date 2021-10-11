import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="green">
            <div className="nav-wrapper">

                <Link to='/' className="brand-logo">MYNOTES</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <NavLink to="/favorites">Favorite Notes</NavLink>

                </ul>

            </div>
        </nav>
    )
}

export default Navbar
