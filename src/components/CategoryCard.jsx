import React, { useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

const CategoryCard = ({ title, icon: Icon, links }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (links.length === 0) return null;

    return (
        <div className="category-card" style={{ height: 'fit-content' }}>
            <div
                className="category-title"
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: 'pointer', justifyContent: 'space-between', width: '100%' }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Icon size={20} />
                    {title}
                </div>
                <ChevronDown
                    size={20}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                    }}
                />
            </div>

            {isOpen && (
                <div className="links-list animate-slide-in-content">
                    {links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-link"
                        >
                            {link.title}
                            <ExternalLink size={14} style={{ opacity: 0.5 }} />
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CategoryCard;
