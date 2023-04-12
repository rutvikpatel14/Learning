import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/LocalStorage">Calculator</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/StudentMark">Studenk Marks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/BgColor">BgColor Change</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/getapi">GetApi</Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
