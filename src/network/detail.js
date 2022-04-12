import {request} from './request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

//要求传入的是json数组
export class Goods {
  constructor(itemInfo) {
    this.title = itemInfo.title//string
    this.price = itemInfo.price//int
  }
}

//要求传入的是json数组，logo为图片，name为string
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
  }
}


export class GoodsParam {
  constructor(info, rule) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}
