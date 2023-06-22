import { GET_TABLES } from "../Actions/actionTypes";

const initialState = {
   lists: [],
   componentAllLists: []
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_TABLES:
            return {
                ...state,
                lists: payload[0],
                componentAllLists: payload[1]
            }
       
        default:
            return state;
    }
}