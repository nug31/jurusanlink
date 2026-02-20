import React from 'react';

const SocialLinks = ({ socials }) => {
    return (
        <div className="social-links">
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    title={social.platform}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
