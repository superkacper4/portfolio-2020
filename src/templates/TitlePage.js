import React from 'react';
import styled from 'styled-components';

import Wrapper from '../atoms/Wrapper';
import H1 from '../atoms/H1';

const StyledWrapper = styled(Wrapper)`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: title infinite 6s linear both alternate;

  @keyframes title {
    0% {
      background-color: ${({ theme }) => theme.lightBlue};
    }
    100% {
      background-color: ${({ theme }) => theme.darkBlue};
    }
  }
`;

const StyledBall = styled.div`
  background-color: ${({ color }) => color};
  width: 40vh;
  height: 40vh;
  border-radius: 50%;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  animation: balls infinite ${({ duration }) => duration} linear both;

  @keyframes balls {
    0% {
      transform: translateY(0);
      opacity: 1;
    }

    50% {
      transform: translateY(-20%);
      opacity: 0.7;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const TitlePage = () => {
  return (
    <StyledWrapper>
      <StyledBall color="#79888c" top="80%" left="-5%" duration="15s" />
      <StyledBall color="#a1b9bf" top="30%" left="65%" duration="14s" />
      <StyledBall color="#a5d9e6" top="-5%" left="50%%" duration="12s" />
      <H1>Kacper Kuczewski</H1>
    </StyledWrapper>
  );
};

export default TitlePage;
