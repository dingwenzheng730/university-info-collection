import Types from "./types";
const initialState = {
    events: [],
    loading:false
};

const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.EVENTS_LOADING: {
            console.log("create_item");
            return {...state,loading: action.payload};
        }

        case Types.GET_EVENTS: {
            return {...state,events: action.payload};
        }

        case Types.DELETE_EVENT: {
            return {...state, events: state.events.filter(event => event.id != action.payload)}
        }
        default:
            return state;
    }
}

export default eventReducer;
