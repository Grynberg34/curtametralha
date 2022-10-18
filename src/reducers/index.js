import { combineReducers } from 'redux';

const openCloseMenuReducer = (open = false, action) => {
    if (action.type === 'OPEN_CLOSE_MENU') {

        return action.payload;
        
    }

return open;
};


export default combineReducers({
    open: openCloseMenuReducer,
});
