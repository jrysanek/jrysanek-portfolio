import React from 'react';
import './Projects.css';

export default function Projects() {
    return (
        <div className="projects">
            
            <h5>Projects</h5>
            <div className="projects-box">
                {/* <div className="p1"> */}
                    <a href="https://corkit-41ce4e.netlify.app">
                    <img className="p-img" src="https://i.imgur.com/ZMKsqhh.png" alt="Cork It" />
                    </a>
                {/* </div> */}

                {/* <div className="p2"> */}
                    <a href="https://apollo-fresh-direct.surge.sh/">
                        <img className="p-img" src="https://i.imgur.com/2Hbt4pf.png" alt="Fresh Direct Rebuild" />
                    </a>
                {/* </div> */}

                {/* <div className="p3"> */}
                    <a href="https://pagebypage.netlify.app">
                        <img className="p-img" src="https://i.imgur.com/9mEHHTN.png" alt="Page by Page" />
                    </a>
                {/* </div> */}
            </div>     
        </div>
    )
}
