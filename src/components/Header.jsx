import React, { useState, useEffect } from 'react';
import { Link, Clock, LogOut, Sun, Moon } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('id-ID', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('id-ID', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <header className="header">
            <div className="logo-section">
                <Link size={32} />
                <h1 className="shimmer-text">JURUSAN LINK</h1>
            </div>

            <div className="header-right">
                <div className="time-section">
                    <div className="time-row">
                        <Clock size={16} />
                        <span>{formatTime(time)}</span>
                    </div>
                    <div className="date-row">{formatDate(time)}</div>
                </div>

                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button className="theme-toggle" title="Logout">
                        <LogOut size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
