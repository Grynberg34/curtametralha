export const OpenCloseMenu = (open) => async dispatch => {

    dispatch({ type: 'OPEN_CLOSE_MENU', payload: open});

};