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
  key: any;
  filter: Filter;
  i: number;
  classNum: number;
  cls: any;
}

const WithClassComponent = (MyComponent: FC<any>) => (props: Props) => {
  const { filter, i } = props;
  return filter[`class${i + 1}`] && <MyComponent {...props} />;
};

export default WithClassComponent;
