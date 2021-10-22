import { render, screen, fireEvent } from '@testing-library/react';
import MyAudio from '../src/game/Game_Components/audio';
//import GamePlay from './game/Game_Play/game_Play';
//import EndButton from './game/Game_Components/endButton';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";
import ProgressBar from './game/Game_Components/progress_Bar';
import Timer from './game/Game_Components/timer';
import GameStart from './game/Game_Play/game_start';
//import handleAnswerButtonClick from './game/Game_Play/game_Play';
//import addScoreOnNext from './game/Game_Play/game_Play';
configure({ adapter: new Adapter() });

test('game Audio buttons can be clicked', () => {
    render(<MyAudio/>);
    //click audio button 
    const muteBtn:any = screen.getAllByRole('button', {pressed: true});
    expect(muteBtn).toBeTruthy;
  });

//render all used components   
 describe("ProgressBar", () => {
    it("renders ProgressBar correctly", () => {
      const wrapper = shallow(<ProgressBar/>);
      expect(wrapper).toMatchSnapshot();
    });
  });

 describe("Timer", () => {
    it("renders Timer correctly", () => {
      const wrapper = shallow(<Timer/>);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("GameStart", () => {
    it("renders GameStart correctly", () => {
      const wrapper = shallow(<GameStart/>);
      expect(wrapper).toMatchSnapshot();
    });
  });


