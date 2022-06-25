import React from 'react';

import { Link } from "react-router-dom";


const Links = () => {
    return (
        <div className="mt-16">
            <div className="mt-3">
                <Link to="/fuk u" className="hover:cursor-twitter">Twitter</Link>
            </div>
            <div className="mt-3">
                <Link to="/fuk u" className="hover:cursor-doc">Resume</Link>
            </div>
            <div className="mt-3">
                <Link to="/fuk u" className="hover:cursor-doc">Are.na</Link>
            </div>
            <div className="mt-3">
                <Link to="/fuk u" className="hover:cursor-custom">Email</Link>
            </div>
            <div className="mt-3">
                <Link to="/fuk u">Source</Link>
            </div>
        </div>
    );
};

export default Links;