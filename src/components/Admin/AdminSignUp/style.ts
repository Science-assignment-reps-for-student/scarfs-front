import styled from 'styled-components';

export const AdminSignUpWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #ff8b4e, #578fff);
`;

export const SignUpFormWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50.1%);
  padding: 32px 40px;
  border-radius: 16px;
`;

export const SignUpLabel = styled.label`
  display: block;
  margin: 16px 0;
  cursor: pointer;
`;

export const SignUpType = styled.div`
  text-transform: capitalize;
`;

export const SignUpInput = styled.input`
  width: 100%;
  padding: 4px 0;
`;

export const SignUpButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 8px;
  border: 0;
  cursor: pointer;
`;

export const SignUpLoading = styled.img`
  width: 24px;
  height: 24px;
`;
