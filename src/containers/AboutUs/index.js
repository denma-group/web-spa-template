import React, { useRef, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

import useScrollToTop from '../../utils/hooks/useScrollToTop';

import FounderCard from '../../components/UI/FounderCard';
import JoinUsImage from '../../static/images/backgrounds/join-us.jpg';
import HookedParallax from '../../components/UI/HookedParallax';
import Text from '../../components/UI/Text';

const { innerHeight } = window;

const AboutUs = (props) => {
  // Hooks
  const founderContainerRef = useRef(null);

  // On mount
  useScrollToTop();

  // Functions
  const ArrowDownClickHandler = useCallback(() => {
    if (founderContainerRef && founderContainerRef.current) {
      founderContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, []);

  const foundersData = useMemo(
    () => [
      {
        name: 'Jorge Baralt',
        age: '24',
        position: 'CEO',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a',
        color: props.theme.brandDarkRed
      },
      {
        name: 'Robert Molina',
        age: '25',
        position: 'CTO',
        description:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a',
        color: props.theme.brandOrange
      }
    ],
    [props.theme.brandDarkRed, props.theme.brandOrange]
  );

  return (
    <Container>
      <HeaderStyle>
        <HeaderContainer height={innerHeight}>
          <Text.H1
            css={css`
              color: ${props.theme.whiteColor};
            `}
          >
            Devoted to provide{' '}
            <Text.Span
              css={css`
                color: ${props.theme.brandDarkRed};
              `}
            >
              professional advice
            </Text.Span>
            , deliver{' '}
            <Text.Span
              css={css`
                color: ${props.theme.brandRed};
              `}
            >
              amazing software
            </Text.Span>
            , and take your company to the{' '}
            <SpanText color={props.theme.brandOrange}>next level.</SpanText>
          </Text.H1>
          <GradientButton color1={props.theme.brandDarkRed} color2={props.theme.brandOrange}>
            Contact Us
          </GradientButton>
          <HookedParallax
            multiplierY={2}
            style={{
              marginTop: 20,
              position: 'absolute',
              bottom: -250,
              right: -250,
              zIndex: 10
            }}
          >
            <Circle size={500} color={props.theme.brandDarkRed}>
              <ArrowDownwardIcon onClick={ArrowDownClickHandler} className="scroll-down" />
            </Circle>
          </HookedParallax>
        </HeaderContainer>
      </HeaderStyle>
      <FounderContainer
        ref={founderContainerRef}
        style={{ position: 'relative', zIndex: 0 }}
        height={innerHeight}
      >
        <Text.H1
          css={css`
            color: ${props.theme.brandOrange};
          `}
        >
          Founder`s Story
        </Text.H1>
        <Text.H3
          css={css`
            color: ${props.theme.whiteColor};
            z-index: 11;
          `}
        >
          Our partnership started a few years ago. Both of us had the same passion for coding and
          building our own company. We started simple, learning some basic stuff, and creating
          projects around it. As we got better, we started creating more interesting and complex
          projects. Until we realized, that we liked managing and working on multiple projects at
          the same time. Now, we have the ability to build projects from the ground up in really
          quick, smart, and efficient way.
        </Text.H3>
        <FoundersBioContainer>
          {foundersData.map((founder, i) => (
            <CardContainer style={{ zIndex: 10 }} key={i.toString()}>
              <FounderCard founder={founder} />
            </CardContainer>
          ))}
        </FoundersBioContainer>
        <HookedParallax style={{ position: 'absolute', bottom: -100 }} multiplierY={2}>
          <Square size={200} rotate={22} color={props.theme.brandDarkRed} />
        </HookedParallax>
        <HookedParallax
          style={{ position: 'absolute', bottom: -100, right: 100 }}
          multiplierY={1.5}
        >
          <Square size={100} rotate={44} color={props.theme.brandOrange} />
        </HookedParallax>
        <HookedParallax style={{ position: 'absolute', bottom: -50, right: 150 }} multiplierY={1.5}>
          <Square size={100} rotate={-22} color={props.theme.brandOrange} />
        </HookedParallax>
      </FounderContainer>
      <JoinUsContainer height={innerHeight}>
        <JoinUsTextContainer>
          <Text.H1
            css={css`
              color: ${props.theme.whiteColor};
              padding: 0;
              font-weight: 500;
            `}
          >
            Want to join us?
          </Text.H1>
          <Text.H2
            css={css`
              color: ${props.theme.whiteColor};
              padding: 0;
            `}
          >
            Do not hesitate to contact us!
          </Text.H2>
          <Text.H3
            css={css`
              color: ${props.theme.whiteColor};
              padding: 0;
            `}
          >
            We are a small team that is always looking forward to grow. We are fun and very
            dedicated.
          </Text.H3>
        </JoinUsTextContainer>
      </JoinUsContainer>
      <OurProcessContainer height={innerHeight} />
    </Container>
  );
};

// Components
const Container = styled.div`
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => `${props.height - 200}px`};
  width: 800px;
  margin-left: 120px;
  margin-top: 200px;
  overflow: hidden;
`;

const SpanText = styled.span`
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  color: ${props => props.color};
`;
const HeaderStyle = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  color: ${props => props.theme.primary};
`;

const GradientButton = styled(Button)`
  &&& {
    background: ${props => `linear-gradient(45deg, ${props.color1} 30%, ${props.color2} 200%);`};
    border-radius: 50px;
    border: 0;
    color: ${props => props.theme.brandWhite};
    height: 50px;
    font-weight: bold;
    width: 400px;
    margin-top: 20px;
    font-size: 42px;
  }
`;

const Circle = styled.div`
  display: flex;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
    color: white;
    right: ${props => `${props.size / 5}px`};
    bottom: ${props => `${props.size / 6}px`};
    position: relative;
  }
`;

const Square = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 30px;
  transform: ${props => `rotateY(0deg) rotate(${props.rotate}deg)`};
  background-color: ${props => props.color};
  opacity: 0.7;
`;

const FounderContainer = styled.div`
  height: ${props => `${props.height}px`};
  background-color: ${props => props.theme.lightDarkColor};
  display: flex;
  flex-direction: column;
  padding: 0 10%;
  justify-content: center;
`;

const FoundersBioContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => props.theme.whiteColor};
  margin-top: 20px;
`;

const CardContainer = styled.div`
  width: 50%;
  display: flex;
  align-content: center;
  justify-content: center;
`;

const JoinUsContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.9)), url(${JoinUsImage});
  height: ${props => `${props.height}px`};
  width: 100%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: flex-end;
  z-index: 20;
`;

const JoinUsTextContainer = styled.div`
  position: relative;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 500px;
  width: 40%;
  top: 240px;
  right: 100px;
  text-shadow: 1.2px 0px black;
`;

const OurProcessContainer = styled.div`
  background: ${props => `linear-gradient(rgba(0, 0, 0, 0.9),${props.theme.lightDarkColor});`};
  height: ${props => `${props.height}px`};
`;

AboutUs.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(AboutUs);
