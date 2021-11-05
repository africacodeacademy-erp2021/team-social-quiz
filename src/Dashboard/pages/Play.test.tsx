import Play from './play';
import { shallow } from 'enzyme'
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";


configure({ adapter: new Adapter() });

describe("Play button", () => {
  it("should render play component", () => {
    const wrapper = shallow(<Play/>);
    expect(wrapper).toMatchSnapshot();
  });
});