import { Action } from '@ngrx/store';
import { Tutorial } from '../app/pages/model/tutorial.model';
import * as TutorialActions from './../actions/tutorial.actions';
import { Actions } from '../actions/tutorial.actions';

const initialState: Tutorial = {
    name: 'initial tutorial',
    url: 'http://google.com'
}

export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions){
        // Section 3
        switch (action.type) {
            case TutorialActions.ADD_TUTORIAL:
                return [...state, action.payload];
            
            case TutorialActions.REMOVE_TUTORIAL:
                state.splice(action.payload, 1);
                return state;
            default:
                return state;
        }
}
