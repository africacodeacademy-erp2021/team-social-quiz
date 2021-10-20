import { render, screen, fireEvent } from '@testing-library/react';
import MyAudio from '../src/game/Game_Components/audio';
import GamePlay from './game/Game_Play/game_Play';
import EndButton from './game/Game_Components/endButton';

test('game Audio buttons can be clicked', () => {
    render(<MyAudio/>);
    //click audio button 
    const muteBtn:any = screen.getAllByRole('button', {pressed: true});
    expect(muteBtn).toBeTruthy;
  });

  test('questions can be displayed', () => {
    render(<GamePlay/>);
     const questionsEL =  screen.getByTestId("display_questions");
     expect(questionsEL.textContent).toBe("");
   });
 
  test('render End button', () => {
     render(<EndButton/>);
     const EndBtn = screen.getByRole('button', {name: 'End'});
     expect(EndBtn).toBeInTheDocument;
     fireEvent.click(EndBtn);
   });
 
   test('render Next button', () => {
     render(<GamePlay/>);
     const NextBtn = screen.getByRole('button', {name: 'Next'});
     expect(NextBtn).toBeInTheDocument;  
     fireEvent.click(NextBtn);
   });
   


