import React from 'react';
import { shallow } from 'enzyme';
import InputField from './input';

it('should render Input component', () => {
  const component = shallow(<InputField input={() => {}} />);
  const wrapper = component.find('inputField');
  expect(wrapper).toBe(1);
});
