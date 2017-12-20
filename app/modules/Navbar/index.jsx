import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar is-dark is-fixed-top">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <Link className="navbar-item" to="/">
                            Home
                        </Link>
                        <Link className="navbar-item" to="/catalog">
                            Catalog
                        </Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
