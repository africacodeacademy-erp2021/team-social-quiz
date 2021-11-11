import Share from "./Share";
import { shallow } from 'enzyme'
import { configure } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

configure({ adapter: new Adapter() });

describe("Share button", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Share/>);
    expect(wrapper).toMatchSnapshot();
  });
})
