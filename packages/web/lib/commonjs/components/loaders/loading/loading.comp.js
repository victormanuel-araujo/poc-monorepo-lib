import React from 'react';
import { LoadingWrapper } from "./loading.styles";

const Loading = props => {
  return /*#__PURE__*/React.createElement(LoadingWrapper, {
    size: props.size,
    color: props.color
  });
};

Loading.defaultProps = {
  size: 36,
  color: 'primary'
};
export default Loading;
//# sourceMappingURL=loading.comp.js.map