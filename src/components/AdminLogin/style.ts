import styled from 'styled-components';

export const AdminLoginWrap = styled.div``;

export const AdminLoginBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1180px;
  background-color: #23282d;
  z-index: -1;
`;

export const AdminLoginFormWrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 80px 24px 8px;
  border-radius: 8px;
  background: white;
`;

export const AdminLoginFormTitle = styled.h1`
  margin-bottom: 24px;
  font-family: 'Noto Sans CJK KR';
`;

export const AdminLoginFormInputWrap = styled.div`
  margin-bottom: 12px;
`;

export const AdminLoginFormInputLabel = styled.label`
  display: block;
  margin-bottom: 6px;
  font-size: 12px;
`;

export const AdminLoginFormInput = styled.input`
  width: 300px;
  padding: 7px 12px;
  border: 1px solid #858585;
  &::placeholder {
    text-transform: uppercase;
  }
`;

export const AdminLoginFormButton = styled.button`
  width: 100%;
  margin: 24px 0 96px;
  padding: 4px;
  border: 0;
  color: white;
  background-color: #1a1a1a;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

export const AdminLoginFormBottomWrap = styled.div`
  color: #0073aa;
  font-size: 16px;
`;
