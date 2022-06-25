import React from 'react';
import Links from "./Links";
import ButtonMailto from "./ButtonMailto";

function Footer() {
    return (
        <div className="text-white col-start-2 col-end-3 mt-32">
            <p>
                Over the last thirteen years I've had the pleasure of collaborating with startups, small to large
            </p>
            <p>
                companies, design studios and other creatives. Working side by side to create, launch and
            </p>
            <p>
                refine meaningful and goal oriented digital products and experiences.
            </p>

            <p className="mt-10">
                I design simple yet effective interfaces and create goal oriented user experiences through
            </p>
            <p>
                iteration and prototyping. I know... it's a lot of jargon. To put it simply, I love working with
            </p>
            <p>
                passionate startups and companies on challenging projects.
            </p>
            <p className="mt-10">
                Available for select freelance projects.<ButtonMailto label="Get in touch" mailto="mailto:ridi@gmail.com" style="col-start-2 col-end-3 text-sky-500 mt-10 hover:text-pink-300 hover:cursor-custom"/>

            </p>
            <Links/>
            <div className="mt-8">made by me for me</div>
        </div>
    );
}

export default Footer;