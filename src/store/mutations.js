export default {
	// 获取 sessionStorage 数据
	getSessionStorage(state) {
		// web storage 只能存储字符串的数据，对于 JS 中常用的数组或对象不能直接存储，可以通过 JSON 转化
		state.cartList = JSON.parse(sessionStorage.sessionCartList)
	},
	// 保存 sessionStorage 数据
	setSessionStorage(state) {
		// web storage 只能存储字符串的数据，对于 JS 中常用的数组或对象不能直接存储，可以通过 JSON 转化
		sessionStorage.setItem('sessionCartList', JSON.stringify(state.cartList));
	},
	addCounter(state, payload) {
		payload.count++;
		// 有操作就保存 sessionStorage 数据
		// 在 mutations 中使用 mutations 
		this.commit('setSessionStorage');
	},
	decCounter(state, payload) {
		payload.count--;
		// 有操作就保存 sessionStorage 数据
		// 在 mutations 中使用 mutations 
		this.commit('setSessionStorage');
	},
	addToCart(state, payload) {
		payload.checked = true;
		state.cartList.push(payload);
		// 有操作就保存 sessionStorage 数据
		// 在 mutations 中使用 mutations 
		this.commit('setSessionStorage');
	}
}