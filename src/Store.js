import { createStore } from 'redux';
import rootReducer from './reducers/RootReducer';
//------- Steps and code ---------
// 1. integrate Redux into React by defining a store using the createStore method from redux.
	// createStore method takes two arguments rootReducer (the program's combined reducers) and initial state

export default(initialState) => {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
}


//------ Background Information -------
// The Purpose of a Store
	// a store uses the reducer to apply an action to a state, or more specifically, to a copy of the state

//Stores use reducers to determine which change or action to apply to the current application state held in the store. The actions define what the change actually is, the reducer just determines which change to make, or which action. 