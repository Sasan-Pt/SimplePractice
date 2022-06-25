import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label,style}:any) => {
    return (
        <Link className={`${style}`}
            to='#'
            onClick={(e:any) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;
