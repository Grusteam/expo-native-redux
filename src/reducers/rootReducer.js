import UTILS, {  } from '../Utils.js';
import CONSTANTS, {  } from '../Constants.js';

const rootReducer = (state = {}, action) => {
	const {
		count = 0,
	} = action;
	
	// console.log('state', state);
	// console.log('action', action);
	
	switch (action.type) {
		case 'CHANGE_COUNT':
			
			return Object.assign( {}, state,
				{
					count,
				}
			);
			
		default:
			return state;
	}
};

export default rootReducer;