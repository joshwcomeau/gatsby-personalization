import React from 'react';

import './client-only.css';

const isBeingPrebuilt =
  typeof window === 'undefined';

const ClientOnly = ({ children }) => {
  if (isBeingPrebuilt) {
    return null;
  }

  return (
    <div className="client-only">{children}</div>
  );
};

export default ClientOnly;
