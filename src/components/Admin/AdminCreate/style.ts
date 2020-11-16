import styled from 'styled-components';

export const AdminCreateWrap = styled.main`
  min-height: 100vh;
  background-color: #23282d;
`;

export const Position = styled.div`
  width: 80%;
  margin: auto;
  padding: 24px 48px;
  background-color: #fbfbfb;
`;

export const Header = styled.header`
  margin-bottom: 16px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
`;
export const HeaderOption = styled.nav`
  display: flex;
  align-items: center;
  padding: 0;
  background-color: #e1e1e1;
`;

export const ButtonWrap = styled.div`
  display: flex;
  border-right: 2px solid #707070;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  &:first-child {
    margin-right: 24px;
  }
`;

export const ButtonImg = styled.img`
  margin-right: 8px;
`;

export const ButtonText = styled.span``;

export const DeadlineWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 24px;
  padding: 2px 4px;
  border: 1px solid #707070;
  background-color: white;
  cursor: pointer;
`;

export const DeadlineText = styled.span`
  font-size: 12px;
`;

export const Deadline = styled.input`
  flex: 1;
  border: 0;
  border-radius: 0;
  font-size: 12px;
`;

export const FormWrap = styled.section`
  display: flex;
`;

export const FromTitle = styled.p`
  margin-bottom: 32px;
  color: #2e2e2e;
  font-size: 16px;
`;

export const InputWrap = styled.div`
  flex: 1;
`;

export const InputsCategoryWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  border: 1px solid #858585;
  background-color: white;
`;

export const InputsCategory = styled.select`
  width: 15%;
  padding: 0 8px;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const InputsCategoryOption = styled.option`
  outline: none;
`;

export const InputsAssignmentName = styled.input`
  flex: 1;
  padding: 4px 12px;
  border: 0;
  font-size: 24px;
`;

export const InputsTextarea = styled.textarea`
  width: 100%;
  height: 80vh;
  border: 1px solid #858585;
  padding: 12px;
  box-sizing: border-box;
  outline: none;
  resize: none;
`;

export const Filters = styled.aside`
  width: 20%;
  margin-left: 48px;
`;

export const FiltersClasses = styled.ul`
  border-top: 1px solid #858585;
  border-bottom: 2px solid #858585;
  padding: 12px 0;
`;

export const FiltersClassesItem = styled.li`
  display: flex;
  margin: 10px 0;
`;

export const FiltersClassesItemLabel = styled.label`
  cursor: pointer;
`;

export const FiltersClassesItemCheckbox = styled.input`
  cursor: pointer;
`;

export const FiltersAttachment = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  margin-top: 8px;
  border: 1px solid #858585;
  font-size: 12px;
  cursor: pointer;
`;

export const FiltersAttachmentFiles = styled.div`
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4px;
  text-align: center;
`;

export const FiltersAttachmentFilesItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 4px 0;
  padding: 8px 0;
  border: 1px solid #1a1a1a;
  font-weight: bold;
`;

export const OverflowEllipsis = styled.span`
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
`;
