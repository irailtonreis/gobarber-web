import React from 'react';

import PropsTypes from 'prop-types';
import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.protoTypes = {
  children: PropsTypes.element.isRequired,
};
