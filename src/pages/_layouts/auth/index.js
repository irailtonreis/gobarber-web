import React from 'react';
import Particles from 'react-particles-js';


import PropsTypes from 'prop-types';
import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    
    <Wrapper>
       <Particles />
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.protoTypes = {
  children: PropsTypes.element.isRequired,
};
