import React from 'react';
import styled from 'styled-components';
import {
  COLOR_TOAST,
  COLOR_SECONDARY,
} from '../config/colors';


const ToastBox = styled.div`
  background-color: ${COLOR_SECONDARY};
  height: 2em;
  width: 5em;
  text-align: center;
  border-radius: 0.5em;
  padding: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 1em;
  left: 1em;
`;

const ToastMessage = styled.p`
  color: ${COLOR_TOAST};
  margin: 0px;
  font-size: 1.5em;
  font-weight: bold;
`;

export default ({message}) => (
  <ToastBox>
    <ToastMessage>
      {message}
    </ToastMessage>
  </ToastBox>
)
