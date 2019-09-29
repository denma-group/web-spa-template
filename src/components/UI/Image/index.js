// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import LazyImage from '../LazyImage';

const Image = props => (
  <StyledImage {...props} />
);

Image.Lazy = LazyImage;

const StyledImage = styled.img`
  object-fit: cover;
  max-height: 100%;
  max-width: 100%;
`;

export default Image;
