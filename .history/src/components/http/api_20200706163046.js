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
        return service.get(`/goods/allGoods?page=${page}size=${size}sort=${sort}priceGt=${priceGt}priceLte=${priceLte}`)
    },
    // 4. 搜索商品(get)
    search() {
        // keyword: 关键字

        return service.get(`/goods/search?keyword=${keyword}`)
    },
    // 5. 商品详情(get)
    detail() {
        // productId: 商品id
        return service.get(`/goods/detail?productId=${id}`)
    },
    // 6. 商品详情(get)
    detail() {
        username: 用户名
password: 密码
        return service.get(`/goods/detail`)
    },
}