<template>
  <div>
    <div class="d-f whole2">
      <div class="whole c-p"  :class="{'tss':isActive1}"  @click="isActive1=true">综合排序</div>
      <div class="whole c-p" @click="hingh" :class="{'tss':isActive2}">价格从低到高</div>
      <div class="whole c-p"  @click="low" :class="{'tss':isActive3}">价格从高到低</div>
      
      <Input v-model="value" placeholder="价格" style="width: 80px" />
      <div class="m-l-10">-</div>
      <Input v-model="value1" placeholder="价格" style="width: 80px" class="m-l-10" />
      <Button type="primary" class="m-l-10">确定</Button>
    </div>
    <div class="d-f whole3">
      <Card v-for="(item,index) in arr" :key="index" class="whole4">
        <div class="d-f f-d-c a-i-c whole5">
          <img :src="item.productImageBig" alt width="206" height="206" />
          <div class="f-s-14 f-c-he m-t-10">{{item.productName}}</div>
          <div class="f-s-12 m-t-10">{{item.subTitle}}</div>
          <div class="f-c-ho f-s-18 m-t-20 f-w">￥{{item.salePrice}}.00</div>
        </div>
      </Card>
    </div>
    <div class="po1">
      <Page
        :total="Number(total)"
        show-total
        show-sizer
        class="po"
        @on-page-size-change="change"
        @on-change="on"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      arr: [],
      value: "",
      value1: "",
       size: 10,
       page:1,
       total:"",
      isActive1:true,
      isActive2:false,
      isActive3:false

    };
  },
  components: {},
  methods: {
       change(val) {
      this.size = val;
      this.getData()
    },
    on(val) {
      this.page = val;
      this.getData()
    },
   getData(){
      this.$api
      .allGoods({
        page: this.page,
        size: this.size
      })
      .then(res => {
        this.arr = res.data;
        this.total=res.total
        console.log(this.arr);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
   },
   hingh(){
       (this.isActive2=true),
       (this.isActive1=false),
       (this.isActive3=false),
       this.$api
      .allGoodsas({
        page: this.page,
        size: this.size,
        sort:1
      })
      .then(res => {
        this.arr = res.data;
        this.total=res.total
        console.log(this.arr);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
   },
   low(){
        (this.isActive2=false),
       (this.isActive1=false),
       (this.isActive3=true),
     this.$api
      .allGoodsas({
        page: this.page,
        size: this.size,
        sort:-1
      })
      .then(res => {
        this.arr = res.data;
        this.total=res.total
        console.log(this.arr);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      }); 
   }
  },
  mounted() {
    this.getData()
      
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.whole {
  padding: 10px 20px;
}
.whole2 {
  margin-left: 170px;
}
.whole3 {
  width: 1220px;
  flex-wrap: wrap;
  margin-left: 170px;
}
.whole4 {
  width: 305px;
  height: 430px;
  background: white;
}
.whole4:hover {
  transform: translateY(-8px);
  box-shadow: 2px 2px 15px #999;
  transition: all 0.5s;
}
.po {
  position: absolute;
  right: 10px;
}
.po1 {
  height: 40px;
}
.tss{
    color: rgb(29, 29, 231);
    cursor: pointer;
}
</style>