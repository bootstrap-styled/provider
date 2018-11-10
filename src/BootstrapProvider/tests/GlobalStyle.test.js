import React from 'react';
import { mount } from 'enzyme';
import BootstrapProvider from '../index';

const renderComponent = (props = {}) => mount( // eslint-disable-line function-paren-newline
  <BootstrapProvider {...props}>
    <h1>Hello</h1>
  </BootstrapProvider>
); // eslint-disable-line function-paren-newline

describe('<GlobalStyle />', () => {
  it('should NOT find GlobalStyleComponent', () => {
    const renderedComponent = renderComponent();
    expect(renderedComponent.find('GlobalStyleComponent').length).toBe(0);
  });
  it('should find GlobalStyleComponent if props reset is true', () => {
    const renderedComponent = renderComponent({
      reset: true,
    });
    expect(renderedComponent.find('GlobalStyleComponent').length).toBe(1);
  });
  it('should find GlobalStyleComponent if props injectGlobal is true', () => {
    const renderedComponent = renderComponent({
      injectGlobal: true,
    });
    expect(renderedComponent.find('GlobalStyleComponent').length).toBe(1);
  });
});
