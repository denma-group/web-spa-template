// Libraries
import React from 'react';
import styled from 'styled-components';

// Components
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import SubmitIcon from '@material-ui/icons/Send';
import {
  StyledHeroValueProposition
} from '../../../containers/Homepage/components';

const SubscribeForm = () => {
  return (
    <Container>
      <StyledHeroValueProposition
        align="center"
      >
        <span>Subscribe to us to hear lorem ipsum all the time!</span>
      </StyledHeroValueProposition>
      <Form noValidate autoComplete="off">
        <StyledTextField
          id="subscribe-name-input"
          label="Name"
          type="text"
          name="subscribe-name"
          margin="normal"
        />
        <StyledTextField
          id="subscribe-email-input"
          label="Email"
          type="email"
          name="subscribe-email"
          margin="normal"
        />
        <StyledFab variant="extended" aria-label="Submit">
          <SubmitIcon />
          <span className="text">Submit</span>
        </StyledFab>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 95%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.screenLg};
  padding: 36px 0 72px;
`;

const Form = styled.form`
  margin-top: 24px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.screenLg}) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTextField = styled(TextField)`
  &&& {
    flex: 1;
    margin: 0 36px;
    @media (max-width: ${({ theme }) => theme.screenLg}) {
      width: 80%;
      margin: 36px auto;
    }
    & label.Mui-focused {
      color: ${({ theme }) => theme.secondary};
    }
    & .MuiInputBase-input {
      height: 1.5875em;
    }
    & .MuiInputBase-root:after {
      border-bottom-color: ${({ theme }) => theme.secondary};
    }
    & .MuiInputBase-root {
      &:hover fieldset, &:active fieldset {
        border-color: ${({ theme }) => theme.secondary};
      }
      & .Mui-focused fieldset {
        border-color: ${({ theme }) => theme.secondary};
      }
    }
    & .MuiInputBase-root.Mui-focused {
      & fieldset {
        border-color: ${({ theme }) => theme.secondary};
      }
    }
  }
`;

const StyledFab = styled(Fab)`
  &&& {
    flex: 0.33;
    margin-left: 72px;
    color: ${({ theme }) => theme.whiteColor};
    background-color: ${({ theme }) => theme.secondary};
    @media (max-width: ${({ theme }) => theme.screenLg}) {
      flex: 1;
      margin-left: 0;
      margin-top: 48px;
      padding: 12px 16px;
    }
    .text {
      margin-left: 0.7185em;
      font-weight: 700;
      font-size: 19px;
    }
  }
`;

export default SubscribeForm;
