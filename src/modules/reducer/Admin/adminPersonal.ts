export interface Personal {
  personal_assignment?: PersonalSubject[];
}

export interface PersonalSubject {
  id: number;
  title: string;
  description: string;
  created_at: number;
  deadline: number;
  class_submit: PersonalSubjectSubmitted[];
}

export interface PersonalSubjectSubmitted {
  name: string;
  student_id: string;
  submit: number;
}

export const dummyPersonal1: Personal = {
  personal_assignment: [
    {
      id: 1,
      title: '정우영의 전구공장1',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
    {
      id: 3,
      title: '정우영의 전구공장3',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
  ],
};

export const dummyPersonal2: Personal = {
  personal_assignment: [
    {
      id: 1,
      title: '정우영의 전구공장1',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
    {
      id: 3,
      title: '정우영의 전구공장3',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
  ],
};

export const dummyPersonal3: Personal = {
  personal_assignment: [
    {
      id: 3,
      title: '정우영의 전구공장3',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
    {
      id: 1,
      title: '정우영의 전구공장1',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
  ],
};

export const dummyPersonal4: Personal = {
  personal_assignment: [
    {
      id: 1,
      title: '정우영의 전구공장1',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
    {
      id: 3,
      title: '정우영의 전구공장3',
      description: 'description of homework',
      created_at: new Date().getTime() - 3600,
      deadline: new Date().getTime() + 3600,
      class_submit: [
        {
          name: '오준상',
          student_id: '1101',
          submit: 0,
        },
        {
          name: '김어진',
          student_id: '1102',
          submit: 1,
        },
      ],
    },
  ],
};
