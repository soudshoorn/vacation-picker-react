import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/react.png';

export default function Nav() {
  return (
    <nav>
        <div className="container">
            <div className="row">
                <div className="nav__wrapper">
                    <figure className="nav__logo">
                        <img src={logo} alt="" />
                    </figure>
                    <ul className="nav__list">
                        <Link to="/">
                            <li className="nav__list--link">Home</li>
                        </Link>
                        <Link to="/newvacation">
                            <li className="nav__list--link">New Vacation</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
