import React from 'react';
import styled, {
  keyframes,
} from 'styled-components';

const isBeingPrebuilt =
  typeof window === 'undefined';

const ClientOnly = ({ children }) => {
  if (isBeingPrebuilt) {
    return null;
  }

  return <Wrapper>{children}</Wrapper>;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  animation: ${fadeIn} 300ms;
`;

export default ClientOnly;
