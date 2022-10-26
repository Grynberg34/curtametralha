import { combineReducers } from 'redux';

const openCloseMenuReducer = (open = false, action) => {
    if (action.type === 'OPEN_CLOSE_MENU') {

        return action.payload;
        
    }

return open;
};

const getSessionsReducer = (sessoes = null, action) => {
    if (action.type === 'GET_SESSIONS') {

        return action.payload;
        
    }

    return sessoes;
};

const getFilmLinkReducer = (link = '', action) => {
    if (action.type === 'GET_FILM_LINK') {

        return action.payload;
        
    }

    return link;
};

export default combineReducers({
    open: openCloseMenuReducer,
    sessoes: getSessionsReducer,
    link: getFilmLinkReducer
});
