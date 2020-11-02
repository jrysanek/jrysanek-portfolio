import React from 'react'
import './Header.css';

export default function Header() {
    return (
        <>
            <div className="header">
                <h1>Jenna Rysanek</h1>
                <h6>Software Enginner</h6>
            </div> 

            <div className="nav-bar">
                <a href="#Biography">Biography</a>
                <a href="#Projects">Projects</a>
                <a href="#Contact">Contact</a>
            </div>
        </>
    )
}
