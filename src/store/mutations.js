export default {
	// 获取 sessionStorage 数据
	getSessionStorage(state) {
		// WebStorage 只存储字符串，不能直接存储 JS 中的数组和对象，可通过 JSON 方法来转化
		state.cartList = JSON.parse(sessionStorage.sessionCartList)
	},
	// 保存 sessionStorage 数据
	setSessionStorage(state) {
		// WebStorage 只存储字符串，不能直接存储 JS 中的数组和对象，可通过 JSON 方法来转化
		sessionStorage.setItem('sessionCartList', JSON.stringify(state.cartList));
	},
	addCounter(state, payload) {
		payload.count++;
		// 操作了 state.cartList 就保存其数据至 WebStorage
		this.commit('setSessionStorage'); // 在 mutations 中使用 mutations 的方法
	},
	decCounter(state, payload) {
		payload.count--;
		// 操作了 state.cartList 就保存其数据至 WebStorage
		this.commit('setSessionStorage'); // 在 mutations 中使用 mutations 的方法
	},
	addToCart(state, payload) {
		payload.checked = true;
		state.cartList.push(payload);
		// 操作了 state.cartList 就保存其数据至 WebStorage
		this.commit('setSessionStorage'); // 在 mutations 中使用 mutations 的方法
	},
	deleteCart(state, payload) {
		state.cartList.splice(payload, 1);
		// 操作了 state.cartList 就保存其数据至 WebStorage
		this.commit('setSessionStorage'); // 在 mutations 中使用 mutations 的方法
	}
}