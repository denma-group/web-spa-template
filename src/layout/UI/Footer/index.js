// Libraires
import React from 'react';
import styled, { css } from 'styled-components';

// Components
import {
  Row,
  Col,
} from 'components/Layout';
import {
  H6,
  Caption,
  Subtitle,
} from 'components/UI/Text';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import LinkedIn from 'components/SVG/Footer/LinkedIn';

const Footer = props => (
  <Wrapper {...props}>
    <Container>
      <LinksContainer>
        {/* ABOUT US LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <StyledH6>
            About Us
          </StyledH6>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        {/* OUR WORK LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <StyledH6>
            Our Work
          </StyledH6>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        {/* OUR WORK LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <StyledH6>
            Contact
          </StyledH6>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6} lg={3}>
          <StyledH6>
            More
          </StyledH6>
          <a href="/" className="link">Home</a>
          <a href="/link" className="link">Link</a>
          <a href="/forever" className="link">Forever</a>
        </StyledGridItem>
      </LinksContainer>
      <hr />
      <ContactContainer>
        {/* CONTACT HEADER */}
        <StyledGridItem item sm={12} md={9}>
          <StyledH6>
            Denma
          </StyledH6>
          <StyledSubtitle color="whiteColor">
            Your vision. Developed.
          </StyledSubtitle>
          <Typography
            variant="caption"
            style={{
              opacity: 0.5,
              userSelect: 'none'
            }}
          >
            © 2019 Copyright: Denma
          </Typography>
        </StyledGridItem>
        {/* CONTACT BUTTONS */}
        <StyledGridItem item sm={12} md={3} className="contact-links">
          <MediaButtons>
            <StyledFab color="primary" aria-label="LinkedIn">
              <LinkedIn />
            </StyledFab>
          </MediaButtons>
          <StyledCaption>
            <a className="contact" href="tel:+11234567890">123 - 456 - 7890</a>
          </StyledCaption>
          <StyledCaption>
            <a className="contact" href="mailto:contact@denma.us?subject=Hi!">contact@denma.us</a>
          </StyledCaption>
        </StyledGridItem>
      </ContactContainer>
    </Container>
  </Wrapper>
);

const Wrapper = styled.footer`
    position: relative;
    padding: 0 16px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.lightDarkColor};
    hr {
      width: calc(100% - 36px);
      opacity: 0.15;
    }
    .contact-links {
      display: flex;
      flex-flow: column;
      align-items: flex-end;
      @media (max-width: ${({ theme }) => theme.screenLg}) {
        align-items: flex-start;
      }
    }
`;

const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  @media (max-width: ${({ theme }) => theme.screenMd}) {
    max-width: 85%;
  }
  @media (max-width: ${({ theme }) => theme.screenSm}) {
    max-width: 90%;
  }
  @media (max-width: ${({ theme }) => theme.screenXs}) {
    max-width: 95%;
  }
`;

const typographyCss = css`
  &&& {
    text-transform: uppercase;
    font-weight: 700;
  }
`;

const StyledH6 = styled(H6)`
  ${typographyCss};
`;

const StyledCaption = styled(Caption)`
  ${typographyCss};
`;

const StyledSubtitle = styled(Subtitle)`
  ${typographyCss};
`;

const StyledGridItem = styled(Col)`
  &&& {
    padding: 16px 18px;
    .contact {
      display: inline-block;
      color: ${({ theme }) => theme.whiteColor};
      font-size: 14px;
      text-decoration: none;
    }
    h6 {
      margin-bottom: 8px;
    }
    .link {
      display: block;
      opacity: 0.5;
      color: ${({ theme }) => theme.whiteColor};
      font-size: 16px;
      margin-bottom: 8px;
      text-decoration: none;
    }
  }
`;

const LinksContainer = styled(Row)`
  padding: 32px 0px 34px;
`;

const ContactContainer = styled(Row)`
  padding: 48px 0px 34px;
`;

const StyledFab = styled(Fab)`
  &&& {
    width: 36px;
    height: 36px;
    background-color: ${({ theme }) => theme.darkColor};
    svg {
      width: 50%;
      height: 50%;
      background-color: transparent;
      fill: ${({ theme }) => theme.whiteColor};
    }
    &:active {
      background-color: '#0062cc';
      border-color: '#005cbf';
    }
  }
`;

const MediaButtons = styled.div`
  margin-bottom: 8px;
`;

export default Footer;
