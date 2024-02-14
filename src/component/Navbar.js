import React from 'react'

export default function Navbar() {
    return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/"><img src="https://www.brillmark.com/wp-content/uploads/2020/09/Brillmark-Logo-with-R-sign.png" alt="" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Development
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">A/B Test Development</a></li>
                            <li><a className="dropdown-item" href="/">Shopify Development</a></li>
                            <li><a className="dropdown-item" href="/">WordPress Test Development</a></li>
                            <li><a className="dropdown-item" href="/">Full Stack Development</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Designing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">CRO Support</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Technical Support
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/">Tool Integration and Platform Setups:</a></li>
                            <li><a className="dropdown-item" href="/">GTM Management:</a></li>
                            <li><a className="dropdown-item" href="/">Performance Audit:</a></li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/" >Quality Assurance:</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/" > Landing Page Creation:</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/" >GA4 Support:</a>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
    )
}
