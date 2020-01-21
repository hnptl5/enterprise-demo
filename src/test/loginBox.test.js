import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LoginBox from '../components/common/LoginBox';

configure({ adapter: new Adapter() });

describe('<Form /> rendering', () => {
    it('renders correctly', () => {
        expect(shallow(<LoginBox />)).toMatchSnapshot();
    });
})


describe('First React component test with Enzyme', () => {
   it('renders without crashing', () => {
      shallow(<LoginBox />);
    });
});