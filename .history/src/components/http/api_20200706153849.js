import service from './index'
export default {
    // 1. 获取首页数据(get)
    home() {
        return service.get(`/goods/home`)
    },
    // 2. 为你推荐(get)
    recommend() {
        return service.get(`/goods/recommend`)
    },
    // 3. 所有商品(get)
    allGoods() {
        return service.get(`/goods/allGoods`)
    },
    // 4. 搜索商品(get)
    search() {
        return service.get(`/goods/search`)
    },
       // 5. 商品详情(get)
       search() {
        return service.get(`/goods/search`)
    },
}