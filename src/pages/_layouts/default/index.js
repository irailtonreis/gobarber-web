import React from 'react';

import PropsTypes from 'prop-types';
import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.protoTypes = {
  children: PropsTypes.element.isRequired,
};
