<template>
  <!--底部-->
  <div>
    <div class="bottom">
      <div class="d-f bottom1">
        <div class="d-f">
          <div class="bottom2">
            <div>订单服务</div>
            <div class="f-c-hu">购买指南</div>
            <div class="f-c-hu">支付方式</div>
            <div class="f-c-hu">送货政策</div>
          </div>
          <div class="bottom2">
            <div>服务支持</div>
            <div class="f-c-hu">官方开源</div>
            <div class="f-c-hu">项目前端</div>
            <div class="f-c-hu">项目后端</div>
          </div>
          <div class="bottom2">
            <div>自助服务</div>
            <div class="f-c-hu">个人博客</div>
            <div class="f-c-hu">个人简介</div>
            <div class="f-c-hu">个人视频</div>
          </div>
          <div class="bottom2">
            <div>其他项目</div>
            <div class="f-c-hu">XPay支付系统</div>
            <div class="f-c-hu">数据共享</div>
            <div class="f-c-hu">待开发...</div>
          </div>
          <div class="bottom2">
            <div>友情链接</div>
            <div class="f-c-hu">宇cccc</div>
            <div class="f-c-hu">Smartisan</div>
            <div class="f-c-hu">Vue</div>
          </div>
          <div class="bottom2">
            <div>关注我吧</div>
            <div class="f-c-hu">腾讯 QQ</div>
            <div class="f-c-hu">新浪微博</div>
            <div class="f-c-hu">官方邮箱</div>
          </div>
        </div>
        <div class="bottom3">
          <div class="bottom4">1012139570</div>
          <div>周一至周日 10:00-23:00（限Starrer或捐赠人</div>
          <div class="bottom5">联系）</div>
          <Button class="bottom6">在线帮助</Button>
        </div>
      </div>
      <div class="bottom7"></div>
      <div class="bottom8 ">
        <div class="d-f">
          Copyright ©2017, exrick.cn Co., Ltd. All Rights Reserved.本网站设计内容大部分属锤子科技
          <div class="item"></div>
          <div class="m-l-10 item1">法律声明</div>
          <div class="item"></div>
          <div class="m-l-10 item1">隐私条款</div>
          <div class="item"></div>
          <div class="m-l-10 item1">开发者中心</div>
        </div>
        <div class="d-f m-t-10">
         <div class="f-c-hu">蜀ICP备16030308号-1</div>
         <div class=" f-c-hu m-l-10">蜀ICP证16030308号</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.bottom {
  width: 100%;
  height: 300px;
  background: rgb(250, 250, 250);
}
.bottom1 {
  padding: 70px 0;
  margin-left: 130px;
}
.bottom2 {
  padding: 0 42px;
}
.bottom3 {
  margin-left: 100px;
}
.bottom4 {
  font-size: 30px;
  margin-left: 102px;
}
.bottom5 {
  margin-left: 240px;
}
.bottom6 {
  margin-left: 185px;
}
.bottom7 {
  width: 1200px;
  height: 0.5px;
  background: #999;
  margin-left: 170px;
  margin-top: -40px;
}
.bottom8 {
  margin-left: 170px;
  margin-top: 30px;
  font-size: 12px;
}
.item {
  width: 1px;
  height: 15px;
  background: #999;
  margin-left: 10px;
  margin-top: 2px;
}
.item1 {
  color: rgb(4, 4, 233);
}
</style>