import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Root = ({children = React.Children}) => {
  return (
    <section className="root" style={{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <main style={{width: '100vw'}}>
        <Navbar />
        {children}
      </main>
    </section>
  );
};

export default Root;
