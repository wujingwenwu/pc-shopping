<template>
  <div class="shoppinfg">
    <div class="products1 d-f a-i-c">
      <div class="m-l-20 f-s-18 c-p">购物清单</div>
    </div>
    <div class="shopping d-f a-i-c j-c-s-b">
      <div class="m-l-20">商品信息</div>
      <div class="d-f shopping2">
        <div class="shopping1">单价</div>
        <div class="shopping1">数量</div>
        <div class="shopping1">小计</div>
        <div class="shopping1">操作</div>
      </div>
    </div>
    <div class="shopping3">
      <div v-for="(item,index) in arr" :key="index">
        <div class="d-f shopping5 m-l-20">
          <Checkbox class="m-t-30" @on-change="checkAllGroupChange(item)" v-model="item.check"></Checkbox>
          <div class="shopping4 m-l-10">
            <img :src="item.productImageBig" alt width="80" height="80" />
          </div>
          <div class="d-f shopping6">
            <div class="shopping1">￥{{item.salePrice}}</div>
            <el-input-number
              size="mini"
              v-model="item.count"
              :min="1"
              :max="10"
              class="num"
               @change="handleChange" 
            ></el-input-number>
            <div class="shopping1">￥{{item.salePrice}}</div>
            <Icon type="md-close-circle" class="circle" @click="circle(item.index)" />
          </div>
        </div>
      </div>
      <div class="shopping7"></div>
      <div class="d-f j-c-s-b font2 a-i-c">
        <div class="d-f m-t-20 m-l-20">
          <Checkbox :value="checkAll" @click.prevent.native="handleCheckAll">全选</Checkbox>
          <div class="f-c-hu f-s-12">删除选中的商品</div>
        </div>
        <div class="d-f shopping9">
          <div>
            <div class="f-s-16">
              已选中
              <span class="f-c-ho m-l-10 f-s-16" >{{lengths}}</span>
              <span class="m-l-10 f-s-16">件商品</span>
            </div>
            <div class="f-s-16">
              共计
              <span class="font f-s-16">{{length}}</span>
              <span class="m-l-10 fonts f-s-16">件商品</span>
            </div>
          </div>
          <div class="shopping8"></div>
          <div class="m-l-20">
            <div class="f-s-16">
              应付总额:
              <span class="f-c-ho f-w f-s-16">￥{{total}}</span>
            </div>
            <div class="font1">应付总额不含运费</div>
          </div>
          <Button type="primary" class="buttom">现在结算</Button>
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
    return {
      arr: [],
      count: "",
      checkAll: false,
      length:'',
      ass: [],
     lengths:0
    };
  },
  components: {},
  methods: {
    checkAllGroupChange() {
       this.checkAll = this.arr.every(item => {
        return item.check === true;
      });
      
    },
    // 全选
    handleCheckAll() {
      this.checkAll = !this.checkAll;
      this.arr.map(item => {
        item.check = this.checkAll;

       
      });
    },
    handleChange(item) {
      this.$api
        .editCart({
          count: item.count,
          productId: item.productId
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 删除
    circle(item,index) {
       this.ass = this.arr.filter(item => {
        return item.check === true;
      });
      if (this.arr.length>0) {
        
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
           this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.$api.delCart(this.arr).then(res=>{
            this.$router.go(0)
          }).catch(err=>{
            console.log(err);
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
      }          
  },
   add(){
      
     this.lengths= this.length.filter(item=>{
        return item.check === true;
      })
      
  }
  },
  mounted() {
    this.add()
    this.$api
      .getCart()
      .then(res => {
        this.arr = res.data;
        this.length= this.arr.length
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
     
  },
  watch: {},
  computed: {
    total() {
      let sun =  0
        this.arr.map(item =>{
         sun+=item.count*item.salePrice
       })
       return sun
    },
  },
 

};
</script>

<style scoped lang='scss'>
.products1 {
  width: 1220px;
  height: 60px;
  margin-left: 170px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.shopping {
  width: 1220px;
  height: 50px;
  margin-left: 170px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.shopping1 {
  padding: 0 40px;
}
.shopping2 {
  margin-right: 50px;
}
.shopping3 {
  width: 1220px;

  background: white;
  margin-left: 170px;
}
.shopping4 {
  width: 85px;
  height: 85px;
  border: 1px solid rgb(216, 211, 211);
}
.shopping5 {
  padding: 30px 0;
}
.shopping6 {
  margin-left: 600px;
}
.circle {
  position: absolute;
  right: 222px;
  font-size: 20px;
}
.shopping7 {
  width: 1220px;
  height: 1px;
  background: rgb(196, 192, 192);
  box-shadow: 1px 1px 5px;
}
.font {
  color: #999;
  margin-right: 10px;
}
.font {
  margin-left: 15px;
}
.shopping8 {
  width: 1px;
  height: 50px;
  background: rgb(219, 217, 217);
  margin-left: 20px;
}
.font1 {
  color: rgb(219, 217, 217);
}
.buttom {
  width: 100px;
  height: 50px;
  margin-left: 20px;
}
.font2 {
  height: 100px;
  width: 1220px;
}
.shopping9 {
  margin-right: 70px;
}
</style>