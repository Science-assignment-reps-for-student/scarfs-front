import React, { FC } from 'react';
import { CombineAdminSubjects } from 'src/modules/reducer/Admin/admin';
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

const WithSubjectComponent = (MyComponent: FC<any>) => (props: Props) => {
  const { subject, filter } = props;
  return (
    <Subject title={subject.classes[0].title}>
      {subject.classes.map((cls: any, i) => (
        <MyComponent key={i} filter={filter} cls={cls} i={i} classNum={i + 1} />
      ))}
    </Subject>
  );
};

const WithPersonalSubject = WithSubjectComponent(Personal);
const WithTeamSubject = WithSubjectComponent(Team);
const WithExperimentSubject = WithSubjectComponent(Experiment);

export { WithPersonalSubject, WithTeamSubject, WithExperimentSubject };

export default WithSubjectComponent;