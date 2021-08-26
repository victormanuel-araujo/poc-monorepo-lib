import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { createTheme } from "./index";
export function ThemeFixture({
  children
}) {
  return /*#__PURE__*/React.createElement(ThemeProvider, {
    theme: createTheme()
  }, children);
}
export function renderWithTheme(element) {
  return render( /*#__PURE__*/React.createElement(ThemeFixture, null, element));
}
//# sourceMappingURL=theme.fixture.js.map