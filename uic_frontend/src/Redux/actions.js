
import Types from "./types";
import axios from "axios";

export const getEvents = () => {
    return dispatch => {
        dispatch({type:Types.EVENTS_LOADING, payload:true})
        axios.get(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/events`)
            .then(response => {
                    dispatch({type:Types.GET_EVENTS, payload:response.data})
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.EVENTS_LOADING, payload:false})
            }
            );
    }
}

export const deleteEvent = (id,cb) => {
    return dispatch => {
        dispatch({type:Types.EVENTS_LOADING, payload:true})
        axios.delete(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/events/${id}/`)
            .then(response => {
                    dispatch({type:Types.DELETE_EVENT, payload:id});
                cb();
                }
            )
            .catch(err => {
                    console.log(err)
                }
            );
    }
}

export const createEvent = (data,cb) => {
    return dispatch => {
        axios.post(`${process.env.REACT_APP_HOST_IP_ADDRESS}/api/events/`, data)
            .then(response => {
                console.log(response)
                    dispatch({type:Types.CREATE_EVENT, payload:response.data});
                    cb()
                }
            )
            .catch(err => {
                    console.log(err)
                    dispatch({type:Types.EVENTS_LOADING, payload:false})
                }
            );
    }
}
