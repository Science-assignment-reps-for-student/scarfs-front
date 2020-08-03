import React, { FC, useCallback, useState } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';

const data = {
  students: [
    {
      studentNo: 1101,
      name: '강신희',
    },
    {
      studentNo: 1102,
      name: '강신희',
    },
    {
      studentNo: 1103,
      name: '강신희',
    },
    {
      studentNo: 1104,
      name: '강신희',
    },
    {
      studentNo: 1105,
      name: '강신희',
    },
    {
      studentNo: 1106,
      name: '강신희',
    },
    {
      studentNo: 1107,
      name: '강신희',
    },
    {
      studentNo: 1108,
      name: '강신희',
    },
    {
      studentNo: 1109,
      name: '강신희',
    },
    {
      studentNo: 1110,
      name: '강신희',
    },
    {
      studentNo: 1111,
      name: '강신희',
    },
    {
      studentNo: 1112,
      name: '강신희',
    },
    {
      studentNo: 1113,
      name: '강신희',
    },
    {
      studentNo: 1114,
      name: '강신희',
    },
    {
      studentNo: 1115,
      name: '강신희',
    },
    {
      studentNo: 1116,
      name: '강신희',
    },
    {
      studentNo: 1117,
      name: '강신희',
    },
    {
      studentNo: 1118,
      name: '강신희',
    },
    {
      studentNo: 1119,
      name: '강신희',
    },
    {
      studentNo: 1120,
      name: '강신희',
    },
  ],
};

interface Student {
  studentNo: number;
  name: string;
  isSelected: boolean;
}
const students: Array<Student> = data.students.map(s => ({ ...s, isSelected: false }));

const AddTeamMemberModal: FC = () => {
  const [studentsStatus, setStudentsStatus] = useState<Array<Student>>(students);
  const [selectedStudents, setSelectedStudents] = useState<Array<Student>>([]);
  const addTeam = useCallback(
    student => {
      setSelectedStudents([...selectedStudents, student]);
    },
    [selectedStudents],
  );
  const deleteTeam = useCallback(
    studentNo => {
      const studentIndex = selectedStudents.findIndex(s => s.studentNo === studentNo);
      const students = [...selectedStudents];
      students.splice(studentIndex, 1);
      setSelectedStudents(students);
    },
    [selectedStudents],
  );
  const selectStudentToggle = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const studentNo = Number(e.currentTarget.dataset.studentNo);
      const studentIndex = students.findIndex(s => s.studentNo === studentNo);
      const isSelected = students[studentIndex].isSelected;
      students[studentIndex].isSelected = !isSelected;
      setStudentsStatus([...students]);
      if (!isSelected) return addTeam({ studentNo, name: students[studentIndex].name });
      deleteTeam(studentNo);
    },
    [addTeam, deleteTeam],
  );
  return (
    <Modal>
      <S.AddTeamMemberModalBox>
        <S.LeftAside>
          <S.SearchBarBox>
            <S.SearchBar>
              <S.SearchButton />
              <S.SearchInput placeholder='학번이나 이름으로 검색하세요.' />
            </S.SearchBar>
          </S.SearchBarBox>
          <S.TeamList>
            <S.Header>
              <S.Label>1반</S.Label>
            </S.Header>
            {studentsStatus.map(({ studentNo, name, isSelected }) => (
              <S.StudentItem
                data-student-no={studentNo}
                key={studentNo}
                isClicked={isSelected}
                onClick={selectStudentToggle}
              >
                <S.Text>{studentNo}</S.Text>
                <S.Text>{name}</S.Text>
              </S.StudentItem>
            ))}
          </S.TeamList>
        </S.LeftAside>
        <S.RightAside>
          <S.Title>팀원</S.Title>
          <S.SelectedTeamListBox>
            {selectedStudents.map(({ studentNo, name }, i) => (
              <S.SelectedTeamItem key={studentNo}>
                <S.TextWrapper>
                  <S.BlueText>{studentNo}</S.BlueText>
                  <S.BlueText>{name}</S.BlueText>
                </S.TextWrapper>
                <S.DeleteButton data-student-no={studentNo} onClick={selectStudentToggle} />
              </S.SelectedTeamItem>
            ))}
          </S.SelectedTeamListBox>
          <S.ModifyTeamMemberButton>팀원 수정</S.ModifyTeamMemberButton>
        </S.RightAside>
      </S.AddTeamMemberModalBox>
    </Modal>
  );
};

export default AddTeamMemberModal;
