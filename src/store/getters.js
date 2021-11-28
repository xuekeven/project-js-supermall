export default {
	cartList(state) {
		return state.cartList
	},
	cartLength(state) {
		return state.cartList.length
	},
	cartCheckLength(state) {
		return state.cartList.filter(item => item.checked).length
	}
}