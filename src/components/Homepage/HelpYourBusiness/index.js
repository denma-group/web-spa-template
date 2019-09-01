// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Dependencies
import image from 'static/images/homepage/help_your_business.png';

// Components
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { CSSTransition } from 'react-transition-group';
import { LazyImage } from 'components/UI';

const ANIMATION_TIMEOUT = 500;

const HelpYourBusiness = () => {
  const [hasLoaded, setLoaded] = useState(false);

  return (
    <Wrapper>
      <CSSTransition
        in={hasLoaded}
        timeout={ANIMATION_TIMEOUT}
        classNames="content"
        onEnter={() => setLoaded(true)}
      >
        <Container>
          <Help>
            <StyledHeader
              variant="h2"
              align="center"
            >
              We’re committed to improve your ventures.
            </StyledHeader>
            <FabsWrapper>
              <Fab>
                New Enterprises
              </Fab>
              <Fab>
                Existing Applications
              </Fab>
              <Fab>
                Marketing Strategies and Analytics
              </Fab>
              <Fab>
                Tech Consulting
              </Fab>
            </FabsWrapper>
          </Help>
          <Image>
            <LazyImage
              draggable={false}
              src={image}
            />
          </Image>
        </Container>
      </CSSTransition>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100%;
  color: ${({ theme }) => theme.whiteColor};
  :before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.primary};
    opacity: 0.9;
  }

  .content-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .content-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
  }
  .content-exit {
    opacity: 1;
  }
  .content-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
  }
`;

const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  min-width: 55%;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 85%;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    display: none;
    min-width: 0%;
  }
`;

const Help = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 5%;
`;

const StyledHeader = styled(Typography)`
  &&& {
    font-size: 54px;
    line-height: 64px;
    margin-bottom: 1em;
    font-weight: 700;
    color: ${props => props.theme.whiteColor};

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 1.25em;
    }

    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 36px;
      line-height: 52px;
    }

    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

const FabsWrapper = styled.div`
  &&& {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    @media (max-height: ${({ theme }) => theme.screenSm}) {
      flex-flow: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
      button {
        margin-bottom: 16px !important;
      }
    }

    button {
      display: inline;
      width: fit-content;
      border-top-left-radius: 28px;
      border-bottom-left-radius: 28px;
      border-top-right-radius: 28px;
      border-bottom-right-radius: 28px;
      padding: 8px 12px;
      margin-bottom: 12px;
      border: 2px solid ${props => props.theme.whiteColor};
      background-color: transparent;

      @media (max-width: ${({ theme }) => theme.screenMd}) {
        padding: 4px 8px;
        font-size: 14px;
        margin-bottom: 8px;
      }

      span {
        min-width: 70px;
        color: ${props => props.theme.whiteColor};
        font-size: 18px;
        font-weight: 700;

        @media (max-width: ${({ theme }) => theme.screenMd}) {
          font-size: 15px;
        }
      }
    }
  }
`;

export default HelpYourBusiness;
