import React from 'react';

const ClientOnly = ({ children }) => {
  return (
    <div className="client-only">{children}</div>
  );
};

export default ClientOnly;
