import httpInstance from '@/utils/http'

//获取banner

export function getBannerAPI(params = {}){
    //默认为 1 商品为 2
    const { distributionSite = '1' } = params
    return httpInstance({
        url:'/home/banner',
        params:{
            distributionSite
        }
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
//规范注释
export const findNewAPI = () => {
    return httpInstance({
      url:'/home/new'
    })
  }

  /**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url:'/home/hot'
    })
}


  /**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
  export const getGoodsAPI = () => {
    return httpInstance({
        url:'/home/goods'
    })
}