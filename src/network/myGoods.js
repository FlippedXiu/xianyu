import {request} from './request'

export function getMyGoodsData(sellID) {
  return request({
    url:'/myGoods',
    params:{
      sellID
    }
  })
}