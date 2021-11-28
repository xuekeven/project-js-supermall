export default {
  addCart(context, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      if (oldProduct) {
        // oldProduct.count += 1;
        context.commit('addCounter', oldProduct)
        resolve('当前商品数量加1')
        reject('添加失败，请稍后再试')
      } else {
        payload.count = 1;
        context.commit('addToCart', payload)
        resolve('添加到购物车成功')
        reject('添加失败，请稍后再试')
      }
    })
  }
}