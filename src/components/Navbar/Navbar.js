import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import indiaflag from '../../images/indiaflag.jpeg';

const Navbar = () => {
    return(
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col s12 m12 l6">
                        <Link to="/" className="brand-logo">COVID19 STATS.in</Link>
                    </div>
                    <div className="col s12 m12 l6">
                        <ul className="right">
                            <li>#IndiaFightsCorona COVID-19</li>
                            <li>
                                <NavLink to="/" className="btn btn-floating pink lighten-1">
                                    <img src={ indiaflag } alt="" className="img-border responsive-img"/>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav> 
    )
}

export default Navbar