import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Navigation = () => {
  return (
    <>
      <header className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 my-4">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0">
          <img
            src={logo}
            alt="Profusion.com"
            className="bi me-2"
          />
        </Link>
      </header>
    </>
  );
};

export default Navigation;
