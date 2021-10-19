import { render, screen, fireEvent } from '@testing-library/react';
import Game_Play from '../src/game/Game_Play/game_Play';
import EndButton from '../src/game/Game_Components/endButton';

test('game Next buttons can be clicked', () => {
  render(<Game_Play/>);
  //button role text
  const btnNext:any = screen.getAllByRole('button', {name: 'Next'});
  //expect the button text to be 'next'
  expect(btnNext.textContent).toBe('Next');
  //click button, use object fireEvent to interact with elements
  fireEvent.click(btnNext);
  
});
test('End button can be clicked', () => {
  render(<EndButton/>);
  //button role and text
  const btnEnd:any = screen.getAllByRole('button', {name: 'End'});
  //expect the button text to be 'End'
  expect(btnEnd.textContent).toBe('End');
  //click button, use object fireEvent to interact with elements
  fireEvent.click(btnEnd);  
});






