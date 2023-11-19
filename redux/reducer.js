import { Delete, Add, Search, LoadAPI } from './actionType';

const initState = []

function reducer(state = initState, action) {
    switch (action.type) {
        case Delete:
            let result = state.filter((item) => {
                return item !== action.data;
            })
            return [...result]
        case Add: return [ ...state, action.data ];
        case Search:
            console.log(state)
            let temp = state.filter((item) => {
                return item.includes(action.data);
            })
            return [...temp]
        case LoadAPI: return [ ...action.data ];
        default: return state;
    }
}
export default reducer;