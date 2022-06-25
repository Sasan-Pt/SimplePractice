import React from 'react';
import ButtonMailto from "./ButtonMailto";




const Header = () => {
    return (
        <div className="col-start-2 col-end-3 mt-40 text-white">
            <h1>Michiel de Graaf </h1>
            <p>— Digital Product Designer </p>
            <p  className="mt-4">I'm a designer based in the Netherlands, involved in the design </p>
            <p>process from strategy, user experience design, interface design, </p>
            <p>prototyping, branding and implementation.</p>
            <div className="mt-10">
            <ButtonMailto label="write me an email" mailto="mailto:ridi@gmail.com"  style="col-start-2 col-end-3 text-sky-500 mt-10 hover:text-pink-300 hover:cursor-custom"/>
            </div>
            <p className="mt-10">Some of the things I've worked on:</p>

        </div>
    );
};



export default Header;
