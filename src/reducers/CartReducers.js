
export default (state = [], action) => {
	switch (action.type){
		case 'Add_ITEM':
			return [...state, action.item]
			default:
				return state
	}
}


// Background
// Switch is a common pattern when writing redux reducers. The switch statement should switch over action.type and return the appropriate state.