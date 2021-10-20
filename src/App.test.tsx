import { render, screen, fireEvent } from '@testing-library/react';
import MyAudio from '../src/game/Game_Components/audio';
import Game_Play from './game/Game_Play/game_Play';
//import Game_Play from '../src/game/Game_Play/game_Play';
//import EndButton from '../src/game/Game_Components/endButton';

test('game Audio buttons can be clicked', () => {
    render(<MyAudio/>);
    //click audio button 
    const muteBtn:any = screen.getAllByRole('button', {pressed: true});
    expect(muteBtn); 
  });

  /*test('questions can be displayed', () => {
    render(<Game_Play/>);

    
  });*/

