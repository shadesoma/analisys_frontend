import React from 'react';
import Sidebar from './sidebar';

const Root = ({children = React.Children}) => {
  return (
    <section className="root" style={{display: 'flex', flexDirection: 'row'}}>
      <Sidebar />
      <main>
        {children}
      </main>
    </section>
  );
};

export default Root;
