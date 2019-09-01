// React
import React from 'react';
import styled from 'styled-components';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import LinkedIn from 'components/SVG/Footer/LinkedIn';

const Footer = props => (
  <Wrapper {...props}>
    <Container>
      <LinksContainer container>
        {/* ABOUT US LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <Header variant="h6">
            About Us
          </Header>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        {/* OUR WORK LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <Header variant="h6">
            Our Work
          </Header>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        {/* OUR WORK LINKS */}
        <StyledGridItem item xs={12} md={6} lg={3}>
          <Header variant="h6">
            Contact
          </Header>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
        <StyledGridItem item xs={12} md={6} lg={3}>
          <Header variant="h6">
            More
          </Header>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
          <a href="/link" className="link">Link</a>
        </StyledGridItem>
      </LinksContainer>
      <hr />
      <ContactContainer container>
        {/* CONTACT HEADER */}
        <StyledGridItem item sm={12} md={9}>
          <Header variant="h6">
            Denma
          </Header>
          <Typography variant="subtitle1">
            Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
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
          <Header variant="caption">
            <a className="contact" href="tel:+11234567890">123 - 456 - 7890</a>
          </Header>
          <Header variant="caption">
            <a className="contact" href="mailto:contact@denma.us?subject=Hi!">contact@denma.us</a>
          </Header>
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

export const Header = styled(Typography)`
  &&& {
    text-transform: uppercase;
    font-weight: 700;
    color: ${({ theme }) => theme.secondary};
  }
`;

const StyledGridItem = styled(Grid)`
  &&& {
    padding: 16px 18px;
    .contact {
      display: inline-block;
      color: ${({ theme }) => theme.whiteColor};
      font-size: 14px;
      line-height: normal;
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
      line-height: normal;
      text-decoration: none;
    }
  }
`;

const LinksContainer = styled(Grid)`
  padding: 32px 0px 34px;
`;

const ContactContainer = styled(Grid)`
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
