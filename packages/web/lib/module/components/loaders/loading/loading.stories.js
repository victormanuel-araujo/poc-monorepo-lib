import React from 'react';
import { Loading } from "../..";
export default {
  title: 'Loaders/Loading',
  component: Loading
};

const Template = args => /*#__PURE__*/React.createElement(Loading, args);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary'
};
export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary'
};
//# sourceMappingURL=loading.stories.js.map