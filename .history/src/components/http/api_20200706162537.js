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
        //         参数: 
        // 1.page: 请求页数(必填)
        // 2.size: 请求条数(必填)
        // 3.sort: 排序方式 1为升序 -1为降序
        // 4.priceGt: 价格区间 从多少开始
        // 5.priceLte: 价格区间 到哪结束
        return service.get(`/goods/allGoods?page={page}`)
    },
    // 4. 搜索商品(get)
    search() {
        return service.get(`/goods/search`)
    },
    // 5. 商品详情(get)
    detail() {
        return service.get(`/goods/detail`)
    },
    // 6. 商品详情(get)
    detail() {
        return service.get(`/goods/detail`)
    },
}