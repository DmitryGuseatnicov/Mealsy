import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header />
      <div className="container">
        <main className="main">
          <Outlet />
        </main>
      </div>
      <footer />
    </>
  );
};

export default Layout;
