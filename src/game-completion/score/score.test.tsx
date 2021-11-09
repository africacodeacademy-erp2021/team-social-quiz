//import {screen } from '@testing-library/react';
//import { render } from 'react-dom';
//import ScoreBoard from './score';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import Leaderboard from '../leaderboard/leaderboard';
import ScoreBoard from "./score";

 
configure({ adapter: new Adapter() });

describe("leaderboard component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Leaderboard />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe("ScoreBored compornent", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<ScoreBoard />);
    expect(wrapper).toMatchSnapshot();
  });
});
 
  



