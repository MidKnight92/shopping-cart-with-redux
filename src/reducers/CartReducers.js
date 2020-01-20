


export default (state = [], action) => {
	switch (action.type){
		case 'Add_ITEM':
			return [...state, action.item]
			default:
				return state
	}
}