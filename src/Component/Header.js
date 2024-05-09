// Header.js
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState();
  return (
    <header className="header">
      <h1>My App</h1>
    </header>
  );
};

export default Header;

// Footer.js

