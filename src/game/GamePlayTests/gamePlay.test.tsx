import  GameScoreFunction  from '../gameFunctions/gameScoreFunction';
import  AddScoreOnNext from '../gameFunctions/gameScoreFunction';
import { render, screen} from '@testing-library/react';
import MyAudio from '../Game_Components/audio';
import Timer from '../Game_Components/timer';
import GameStart from '../Game_Play/game_start';
import ProgressBar from '../Game_Components/progress_Bar';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { renderHook, act} from '@testing-library/react-hooks'
import { configure, shallow } from "enzyme";
configure({ adapter: new Adapter() });

test('game Audio buttons can be clicked', () => {
  render(<MyAudio/>);
  //click audio button 
  const muteBtn:any = screen.getAllByRole('button', {pressed: true});
  expect(muteBtn).toBeTruthy;
});

describe("add Score", () => {
  it("it adds score by 50", () => {    
    const { result } = renderHook(GameScoreFunction); 
     
    expect(result.current.addScoreOnNext).toBeCalled;

     })
}) 
 
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


