import * as actionTypes from "../actions/actionTypes";

const initialState = {
    user: 'User',
    users: [],
    tasksBefore: [],
    tasksToday: [],
    questions: []
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            return {
                ...state,
                user: action.user,
                users: [...state.users, action.user],
                tasksBefore: [],
                tasksToday: [],
                questions: []
            }
        case actionTypes.GET_USERS:
            return {
                ...state,
                users: [ ...action.users ]
            }
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
                tasksBefore: action.tasksBefore,
                tasksToday: action.tasksToday,
                questions: action.questions
            }
        case actionTypes.DELETE_USER:
            return {
                ...state,
                users: [...action.users],
                user: '',
                tasksBefore: [],
                tasksToday: [],
                questions: []
            }
        case actionTypes.CREATE_TASK:
            return {
                ...state,
                [action.taskType]: [ ...state[action.taskType], ...action[action.taskType] ]
            }
        case actionTypes.GET_TASK:
            return {
                ...state,
                [action.taskType]: [ ...state[action.taskType], ...action[action.taskType] ]
            }
    
        default:
            return state;
    }
}

export default taskReducer;