import * as ActionTypes from './ActionTypes';


// if the state is undefined , the default is return. 

export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: [] }, action) => {

    switch (action.type) {

        case ActionTypes.ADD_LEADS:
            return { ...state, isLoading: false, errMess: null, leaders: action.payload }

        case ActionTypes.LEADS_LOADING:
            return {...state,isLoading: true, errMess: null, leaders: []}

        case ActionTypes.LEADS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] }

        default:
            return state;
    }
}