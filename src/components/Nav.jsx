import React from 'react'
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
                        <li className="nav__list--link">Home</li>
                        <li className="nav__list--link">New Vacation</li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}
