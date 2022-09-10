import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets';

const Layout = () => {
  return (
    <>
      <Header />
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
