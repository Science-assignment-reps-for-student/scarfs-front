import React, { FC } from 'react';

interface Filter {
  class1: boolean;
  class2: boolean;
  class3: boolean;
  class4: boolean;
  personal: boolean;
  team: boolean;
  experiment: boolean;
}
interface Props {
  filter: Filter;
  classNum: number;
}

const WithClassComponent = (MyComponent: FC<any>) => (props: Props) => {
  const { filter, classNum } = props;
  return filter[`class${classNum}`] && <MyComponent {...props} />;
};

export default WithClassComponent;
