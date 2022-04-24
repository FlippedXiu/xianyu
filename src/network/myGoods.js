import {request} from './request'

export function getMyGoodsData(userID) {
  return request({
    url:'/myGoods',
    params:{
      userID
    }
  })
}