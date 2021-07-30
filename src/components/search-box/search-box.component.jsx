import React from 'react';

import './search-box.styles.css';

// FUNCTIONAL COMPONENT - just render a component
export const SearchBox = ({placeholder, handleChange}) => (
    <input type="search" 
    placeholder={placeholder}
    onChange={handleChange} />
);