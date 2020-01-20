// Action Creator functions

// This action will be called from a button in the UI
export const addToCart = (item) => {
	// This console.log is a side effect and technically makes this function "impure".
	// It may come in handy when testing to see if we've integrated redux correctly
	console.log(`Action: adding ${item} to cart`);
	return {
		type: 'ADD_ITEM', //action naming conventions: all caps with snake-case 
		item //ES6 shorthand {item: item}
	}


}