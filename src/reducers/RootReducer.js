import cart from './CartReducers';
import { combineReducers } from 'redux';


// 1. use the combineReducer helper function it returns a single, aggregated object. It combines all the reducers into a single object, then returns that object. It is being referred to as rootReducer below. The values of rootReducer will be the reducer functions into a single reducing function you can pass to createStore


// the object returned by this function must have a key named `cart` since `cart`
// will be a *prop* on our Cart container element
const rootReducer = combineReducers({
  cart //ES6 short hand for {cart: cart}
})

export default rootReducer