import React from 'react';

import './client-only.css';

const isBeingPrebuilt =
  typeof window === 'undefined';

const InvisibleDuringPrerender = ({
  children,
}) => {
  const [
    hasMounted,
    setHasMounted,
  ] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div
      style={{
        opacity: hasMounted ? 1 : 0,
        // pointerEvents: hasMounted
        //   ? 'auto'
        //   : 'none',
        visibility: hasMounted
          ? 'visible'
          : 'hidden',
        transition: 'opacity 300ms',
      }}
    >
      {children}
    </div>
  );
};

const IncorporealDuringPrerender = ({
  children,
}) => {
  if (isBeingPrebuilt) {
    return null;
  }
  return (
    <div className="client-only">{children}</div>
  );
};

const ClientOnly = ({
  children,
  mode = 'invisible',
}) => {
  if (mode === 'invisible') {
    return (
      <InvisibleDuringPrerender>
        {children}
      </InvisibleDuringPrerender>
    );
  } else if (mode === 'incorporeal') {
    return (
      <IncorporealDuringPrerender>
        {children}
      </IncorporealDuringPrerender>
    );
  } else {
    throw new Error(`Unrecognized mode: ${mode}`);
  }
};

export default ClientOnly;
