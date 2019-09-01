import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import Text from '../Text';

const FounderCard = (props) => {
  const { founder, theme } = props;

  return (
    <CardOutside>
      {/* TODO: Remove placeholders */}
      <CircularImage src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
      <Card>
        <Text.H2>{founder.name}</Text.H2>
        <Text.H3
          css={css`
            color: ${founder.color};
            font-weight: 500;
          `}
        >
          {founder.position}
        </Text.H3>
        <Text.P>{founder.description}</Text.P>
        <CornerDecoration color={founder.color} />
      </Card>
    </CardOutside>
  );
};

const CardOutside = styled.div`
  display: flex;
  position: relative;
  width: 60%;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => props.theme.darkColor};
  background-color: ${props => props.theme.darkColor};
  border-radius: 10px;
  overflow: hidden;
  padding: 100px 20px 20px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const CircularImage = styled.img`
  position: absolute;
  top: 25px;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  z-index: 1;
`;

const CornerDecoration = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${props => props.color};
  position: absolute;
  top: -50px;
  left: -50px;
`;

FounderCard.propTypes = {
  founder: PropTypes.object.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(FounderCard);
