import React from 'react';

const ClientOnly = ({ children }) => {
  const [
    hasMounted,
    setHasMounted,
  ] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return children;
};

export default ClientOnly;
