import React from 'react';

const LinkCard = ({ title, url, icon }) => {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="link-card">
            <span style={{ marginRight: '12px' }}>{icon}</span>
            {title}
        </a>
    );
};

export default LinkCard;
