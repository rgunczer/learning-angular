export function reducer(state, action) {
    console.log('reducer');
    switch(action.type) {
        case 'TOGGLE_CODE':
            console.log('toggle-code');
            return {
                ...state,
                showCode: action.payload
            };

        default:
            return state;
    }
}