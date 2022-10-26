import sessoes from "../sessoes";

export const OpenCloseMenu = (open) => async dispatch => {

    dispatch({ type: 'OPEN_CLOSE_MENU', payload: open});

};

export const GetSessions = () => async dispatch => {

    dispatch({ type: 'GET_SESSIONS', payload: sessoes});

};

export const GetFilmLink = (link) => async dispatch => {

    dispatch({ type: 'GET_FILM_LINK', payload: link });

};