export default {
  cartGoodsList(state) {
    return state.cartGoods
  },
  addCount(state,payload) {
    payload.count += 1;
  },
}
