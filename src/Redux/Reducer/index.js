import { GET_DETAIL, GET_TABLES } from "../Actions/actionTypes";

const initialState = {
   lists: [],
   componentAllLists: [],
   detail: []
};

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_TABLES:
            return {
                ...state,
                lists: payload[0],
                componentAllLists: payload[1]
            }
        case GET_DETAIL: 
            return {
                ...state,
                detail: payload,
            }
       
        default:
            return state;
    }
}