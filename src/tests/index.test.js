/**
 * Testing example
 */

import React from 'react';
import { shallow } from 'enzyme';
import ReactDemo from '../index';

describe('<ReactDemo />', () => {
  it('should render a <Dropdown /> tag', () => {
    const renderedComponent = shallow(<ReactDemo />);
    expect(renderedComponent.find('Dropdown').length).toBe(1);
  });
});

