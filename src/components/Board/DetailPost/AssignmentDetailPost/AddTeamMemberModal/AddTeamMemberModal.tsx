import React, { FC, useCallback, useState, useMemo, useEffect } from 'react';
import * as S from './style';
import { Modal } from '../../Modal';
import { StudentResponse } from '../../../../../lib/api/AddTeamMember';
import { ErrorType } from '../../../../../lib/type';
import { useUser, useTeam, stateChange, useToken } from '../../../../../lib/function';
import { sendRefreshToken } from '../../../../../modules/reducer/Header';

interface Student {
  id: number;
  number: string;
  name: string;
  isSelected: boolean;
}

interface SelectedStudent {
  id: number;
  number: string;
  name: string;
}

interface Props {
  isLoadingGetStudents: boolean;
  students: StudentResponse[];
  getStudentsError: ErrorType;
  getStudents: (query: string, assignment_id: number) => void;
  deleteTeamMemberSuccess: boolean;
  deleteTeamMemberError: ErrorType;
  deleteTeamMember: (member_id: number) => void;
  addTeamMemberSuccess: boolean;
  addTeamMemberError: ErrorType;
  addTeamMember: (member_id: number, target_id: number) => void;
  addTeamMemberStudentNo: string;
  setAddTeamMemberStudentNo: (studentNo: string) => void;
  isLastAddTeamMember: boolean;
  setIsLastAddTeamMember: () => void;
  resetAddTeamMember: () => void;
}

const AddTeamMemberModal: FC<Props> = ({
  isLoadingGetStudents,
  students,
  getStudentsError,
  getStudents,
  deleteTeamMemberSuccess,
  deleteTeamMemberError,
  deleteTeamMember,
  addTeamMemberSuccess,
  addTeamMemberError,
  addTeamMember,
  addTeamMemberStudentNo,
  setAddTeamMemberStudentNo,
  isLastAddTeamMember,
  setIsLastAddTeamMember,
  resetAddTeamMember,
}) => {
  const [, refreshToken] = useToken();
  const refreshTokenChange = stateChange(sendRefreshToken);
  const assignmentId = parseInt(location.pathname.split('/')[3]);
  const [team, , getTeam] = useTeam();
  const [memberId, setMemberId] = useState(0);
  const { studentNumber, name, classNumber } = useUser();
  const [query, setQuery] = useState<string>('');
  const [selectedStudents, setSelectedStudents] = useState<SelectedStudent[]>([]);

  const studentsWithOption: Student[] = useMemo(
    () =>
      students.map(s => {
        const index = selectedStudents.findIndex(student => student.number === s.number);
        let student;

        if (index !== -1) {
          student = { ...s, isSelected: true };
        } else {
          student = { ...s, isSelected: false };
        }

        return student;
      }),
    [students],
  );

  const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const addTeam = useCallback(
    student => {
      setSelectedStudents([...selectedStudents, student]);
    },
    [selectedStudents],
  );

  const deleteTeam = useCallback(
    studentNo => {
      const studentIndex = selectedStudents.findIndex(s => s.number === studentNo);
      const students = [...selectedStudents];
      students.splice(studentIndex, 1);
      setSelectedStudents(students);
    },
    [selectedStudents],
  );

  const selectStudentToggle = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      const id = Number(e.currentTarget.dataset.id);
      const studentNo = e.currentTarget.dataset.studentNo;
      const studentIndex = studentsWithOption.findIndex(s => s.number === studentNo);
      if (studentIndex === -1) {
        return deleteTeam(studentNo);
      }
      const isSelected = studentsWithOption[studentIndex].isSelected;
      const newStudentsWithOption = [...studentsWithOption];
      newStudentsWithOption[studentIndex].isSelected = !isSelected;
      if (!isSelected)
        return addTeam({ id, number: studentNo, name: newStudentsWithOption[studentIndex].name });
      deleteTeam(studentNo);
    },
    [addTeam, deleteTeam, studentsWithOption],
  );

  const onClickSearch = useCallback(() => {
    getStudents(query, assignmentId);
  }, [query]);

  const onKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onClickSearch();
      }
    },
    [query],
  );

  const onClickDeleteOriginalMember = (member_id: number) => {
    if (confirm('정말로 팀원을 삭제하시겠습니까?')) {
      setMemberId(member_id);
      deleteTeamMember(member_id);
    }
  };

  const onClickAddTeamMember = useCallback(() => {
    if (!selectedStudents.length) {
      alert('추가할 팀원이 없습니다.');
    } else {
      selectedStudents.forEach(student => {
        addTeamMember(team.team_id, student.id);
        setAddTeamMemberStudentNo(student.number);
      });
      setIsLastAddTeamMember();
    }
  }, [selectedStudents]);

  useEffect(() => {
    getStudents(query, assignmentId);

    return () => {
      resetAddTeamMember();
    };
  }, []);

  useEffect(() => {
    if (getStudentsError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => getStudents(query, assignmentId),
        page: 'AddTeamMemberModal/getStudents',
      };
      refreshTokenChange(params);
    } else if (getStudentsError.status) {
      alert(`Error code: ${getStudentsError.status} 학생 목록 불러오기 실패!`);
    }
  }, [getStudentsError]);

  useEffect(() => {
    if (deleteTeamMemberSuccess) {
      resetAddTeamMember();
      getTeam(assignmentId);
      getStudents(query, assignmentId);
      setMemberId(0);
    }
  }, [deleteTeamMemberSuccess]);

  useEffect(() => {
    if (deleteTeamMemberError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => onClickDeleteOriginalMember(memberId),
        page: 'AddTeamMemberModal/onClickDeleteOriginalMember',
      };
      refreshTokenChange(params);
    } else if (deleteTeamMemberError.status) {
      alert(`Error code: ${deleteTeamMemberError.status} 팀원 삭제 실패!`);
    }
  }, [deleteTeamMemberError]);

  useEffect(() => {
    if (addTeamMemberSuccess) {
      getStudents(query, assignmentId);
      getTeam(assignmentId);
      deleteTeam(addTeamMemberStudentNo);
      resetAddTeamMember();
      if (isLastAddTeamMember) {
        setSelectedStudents([]);
      }
    }
  }, [addTeamMemberSuccess]);

  useEffect(() => {
    if (addTeamMemberError.status === 403) {
      const params = {
        serverType: {
          refreshToken,
        },
        callback: () => onClickAddTeamMember(),
        page: 'AddTeamMemberModal/onClickAddTeamMember',
      };
      refreshTokenChange(params);
    } else if (addTeamMemberError.status) {
      alert(
        `Error code: ${addTeamMemberError.status} ${addTeamMemberStudentNo} 번 학생 팀 추가 실패`,
      );
    }
  }, [addTeamMemberError]);

  return (
    <Modal>
      <S.AddTeamMemberModalBox>
        <S.LeftAside>
          <S.SearchBarBox>
            <S.SearchBar>
              <S.SearchButton onClick={onClickSearch} />
              <S.SearchInput
                placeholder='학번이나 이름으로 검색하세요.'
                value={query}
                onChange={onChangeQuery}
                onKeyPress={onKeyPress}
              />
            </S.SearchBar>
          </S.SearchBarBox>
          <S.TeamList>
            <S.Header>
              <S.Label>{classNumber}반</S.Label>
            </S.Header>
            {isLoadingGetStudents ? (
              <S.StudentItem isClicked={false}>학생 목록 불러오는중...</S.StudentItem>
            ) : (
              studentsWithOption.map(({ id, number, name, isSelected }) => (
                <S.StudentItem
                  data-student-no={number}
                  data-id={id}
                  key={number}
                  isClicked={isSelected}
                  onClick={selectStudentToggle}
                >
                  <S.Text>{number}</S.Text>
                  <S.Text>{name}</S.Text>
                </S.StudentItem>
              ))
            )}
          </S.TeamList>
        </S.LeftAside>
        <S.RightAside>
          <S.Title>팀장</S.Title>
          <S.SelectedTeamListBox>
            <S.SelectedTeamItem>
              <S.TextWrapper>
                <S.BlueText>{studentNumber}</S.BlueText>
                <S.BlueText>{name}</S.BlueText>
              </S.TextWrapper>
            </S.SelectedTeamItem>
          </S.SelectedTeamListBox>
          {!!team.member_list.length && (
            <>
              <S.Title>기존 팀원</S.Title>
              <S.SelectedTeamListBox>
                {team.member_list.map(member => (
                  <S.SelectedTeamItem key={member.member_number}>
                    <S.TextWrapper>
                      <S.BlueText>{member.member_number}</S.BlueText>
                      <S.BlueText>{member.member_name}</S.BlueText>
                    </S.TextWrapper>
                    <S.DeleteButton onClick={() => onClickDeleteOriginalMember(member.member_id)} />
                  </S.SelectedTeamItem>
                ))}
              </S.SelectedTeamListBox>
            </>
          )}

          <S.Title>추가할 팀원</S.Title>
          <S.SelectedTeamListBox>
            {selectedStudents.map(({ number, name }, i) => (
              <S.SelectedTeamItem key={number}>
                <S.TextWrapper>
                  <S.BlueText>{number}</S.BlueText>
                  <S.BlueText>{name}</S.BlueText>
                </S.TextWrapper>
                <S.DeleteButton data-student-no={number} onClick={selectStudentToggle} />
              </S.SelectedTeamItem>
            ))}
          </S.SelectedTeamListBox>
          <S.ModifyTeamMemberButton onClick={onClickAddTeamMember}>
            팀원 추가
          </S.ModifyTeamMemberButton>
        </S.RightAside>
      </S.AddTeamMemberModalBox>
    </Modal>
  );
};

export default AddTeamMemberModal;
