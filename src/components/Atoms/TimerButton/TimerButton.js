import styled, { css } from 'styled-components';

const TimerButton = styled.button`
  height: 48px;
  width: 30%;
  color: white;
  font-weight: 500;
  background: linear-gradient(90deg, #6762ff 0%, rgba(255, 255, 255, 0) 100%), #ff5362;
  border-radius: 10px;
  border: none;
  font-size: 2.5rem;

  ${({ red }) =>
    red &&
    css`
      background: ${({ theme }) => theme.red};
    `}

  ${({ blue }) =>
    blue &&
    css`
      background: ${({ theme }) => theme.blue};
    `}
`;

export default TimerButton;
