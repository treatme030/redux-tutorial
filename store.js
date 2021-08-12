const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();
const combineReducers = redux.combineReducers;

//actions
//actions-types
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}

const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}

//reducers
const subscribeState = {
    subscribers : 365
}
const subscriberReducer = (state=subscribeState, action) => {
    switch(action.type){
        case ADD_SUBSCRIBER:
            return {
                ...state,
                subscribers: state.subscribers + 1
            }
        default: return state;
    }
}

const viewState = {
    viewCount : 100
}
const viewReducer = (state=viewState, action) => {
    switch(action.type){
        case ADD_VIEWCOUNT:
            return {
                ...state,
                viewCount: state.viewCount + 1
            }
        default: return state;
    }
}

//여러개의 reducers를 함께 전달 
const rootReducer = combineReducers({
    view: viewReducer,
    subscriber: subscriberReducer
})

//store
//두번째 인자로 미들웨어를 넘길 수 있음 
const store = createStore(rootReducer, applyMiddleware(logger));

// store.subscribe(() => {
//     console.log('subscribe ==>', store.getState());
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());