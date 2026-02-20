import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
                type="text"
                className="search-input"
                placeholder="Cari link kerja (misal: absensi, laporan, drive)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
