import React, { FC, useMemo } from 'react';
import { CombineAdminSubjects, CombineAdminSubject } from '../../../modules/reducer/Admin';
import Subject from './Subject';
import Team from './Team/Team';
import Personal from './Personal/Personal';
import Experiment from './Experiment/Experiment';

interface Filter {
  class1: boolean;
  class2: boolean;
  class3: boolean;
  class4: boolean;
  personal: boolean;
  team: boolean;
  experiment: boolean;
}
interface CombineResult {
  id: number;
  classes: CombineAdminSubjects;
}
interface Props {
  subject: CombineResult;
  filter: Filter;
}
interface MyComponentProps {
  subject: CombineAdminSubject;
  filter: Filter;
  classNum: number;
}

const WithSubjectComponent = (MyComponent: FC<MyComponentProps>) => (props: Props) => {
  const { subject, filter } = props;

  const getClasses = useMemo(() => {
    return subject.classes.map((subject: CombineAdminSubject, i) => (
      <MyComponent
        key={Object.keys(filter)[i]}
        subject={subject}
        filter={filter}
        classNum={i + 1}
      />
    ));
  }, [subject]);

  return <Subject subject={subject.classes}>{getClasses}</Subject>;
};

const WithPersonalSubject = WithSubjectComponent(Personal);
const WithTeamSubject = WithSubjectComponent(Team);
const WithExperimentSubject = WithSubjectComponent(Experiment);

export { WithPersonalSubject, WithTeamSubject, WithExperimentSubject };

export default WithSubjectComponent;
