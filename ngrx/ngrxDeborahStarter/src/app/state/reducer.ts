export function reducer(state, action) {
    switch(action.type) {
        case 'TOGGLE_CODE':
            return {
                ...state,
                showCode: action.payload
            };

        default:
            return state;
    }
}