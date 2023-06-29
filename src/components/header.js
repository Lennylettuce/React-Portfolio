import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <h1 className="m-0">Aubrey's React Portfolio</h1>
        <p className="m-0">Checkout my projects in the projects tab!</p>
      </div>
    </header>
  );
};

export default Header;