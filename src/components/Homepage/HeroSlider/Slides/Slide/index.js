// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import { LazyImage } from 'components/UI';
import Typography from '@material-ui/core/Typography';

const Servify = (props) => {
  const { title, caption, src, slideNumber } = props;
  return (
    <Wrapper>
      <InformationContainer slideNumber={slideNumber}>
        <Typography variant="h2">{title}</Typography>
        <Typography variant="body1">{caption}</Typography>
      </InformationContainer>
      <ImageContainer slideNumber={slideNumber}>
        <LazyImage draggable={false} src={src} />
      </ImageContainer>
    </Wrapper>
  );
};

Servify.propTypes = {
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  slideNumber: PropTypes.number.isRequired
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    flex-flow: column;
    > div {
      order: initial;
      padding: 15px 20px;

      h2 {
        font-size: 2.75rem;
      }
    }

    div:first-of-type {
      flex: 1.1;
    }

    div:nth-of-type(2) {
      flex: 1;
      align-items: flex-start;
    }
  }

  @media (max-height: ${({ theme }) => theme.screenSm}) {
    > div {
      padding: 15px 20px;

      h2 {
        font-size: 1.5em;
      }

      p {
        font-size: 1.25em;
      }
    }
  }
`;

const InformationContainer = styled.div`
  flex: 1.25;
  order: ${({ slideNumber }) => (slideNumber % 2 === 0 ? 2 : 'initial')};
  padding: ${({ slideNumber }) => (slideNumber % 2 === 0 ? '24px 120px 0 60px' : '24px 60px 0 120px')};
  color: ${({ theme }) => theme.whiteColor};
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  h2 {
    margin-bottom: 20px;
    font-weight: bold;
    text-align: center;
  }

  p {
    margin-top: 4px;
    font-size: 24px;
    text-decoration: none;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 2;
  padding: ${({ slideNumber }) => (slideNumber % 2 === 0 ? '0 0 0 120px' : '0 120px 0 0')};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Servify;
