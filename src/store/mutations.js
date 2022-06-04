export default {
  addCount(state,payload) {
    payload.count += 1;
  },
  pushCartGoods(state,payload) {
    payload.isCheck = true;
    payload.count = 1;
    state.cartGoods.push(payload)
  },
  DeleteSelected(state){
    console.log(state);
    let len = state.cartGoods.length;
    for (let i = 0; i < len; i++) {
      if(state.cartGoods[i].isCheck){
        state.cartGoods.splice(i,1);
      }
    }
  }
}
