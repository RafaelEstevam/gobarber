import React from 'react';
import styled from 'styled-components';

const AuthWrapper = styled('div')`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`
function TemplateAuth({children}) {
  return (
    <AuthWrapper>
      <div>
        {children}
      </div>
    </AuthWrapper>
  );
}

export default TemplateAuth;