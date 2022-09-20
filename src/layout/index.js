import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

const Main = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="application">
        <Header />
        <main className="px-md-0 pb-5 position-relative">{children}</main>
      </div>
    </>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Main.defaultProps = {
  children: null,
};

export default Main;
