<template>
  <div>
    <div class="d-f">
      <div class="list d-f f-d-c a-i-c">
        <div class="list1">
          <img
            src="../../components/publics/d7f25cc4778c818926719e635e00ee44.jpg"
            alt
            class="title2"
          />
        </div>
        <div class="m-t-20">{{username}}</div>
        <div class="list2 m-t-10"></div>
        <div class="lists d-f a-i-c j-c-c">
          <div class="list3">我的订单</div>
        </div>
        <div class="list2"></div>
        <div class="lists d-f a-i-c j-c-c">
          <div class="list3">账户资料</div>
        </div>
        <div class="list2"></div>
        <div class="listss d-f a-i-c j-c-c">
          <div class="f-c-b">收货地址</div>
        </div>
        <div class="list2"></div>
        <div class="lists d-f a-i-c j-c-c">
          <div class="list3">我的优惠</div>
        </div>
        <div class="list2"></div>
        <div class="lists d-f a-i-c j-c-c">
          <div class="list3">售后服务</div>
        </div>
        <div class="list2"></div>
        <div class="lists d-f a-i-c j-c-c">
          <div class="list3">以旧换新</div>
        </div>
      </div>
      <div>
        <div class="products1 d-f a-i-c j-c-s-b">
          <div class="m-l-20 f-s-18 c-p">收货地址</div>
          <Button label="large" size="small" class="list-title" @click="modal13  = true">添加收货地址</Button>
          <Modal
            v-model="modal13 "
            title="新增收货地址"
            draggable
            scrollable
            @on-ok="ok"
            @on-cancel="cancel"
          >
            <div>
              <Input
                v-model="username"
                placeholder="收货人姓名"
                clearable
                style="width: 400px;"
                size="large"
              />
            </div>
            <div class="m-t-20">
              <Input
                v-model="phone"
                placeholder="收货人电话"
                clearable
                style="width: 400px"
                size="large"
              />
            </div>
            <div class="m-t-20">
              <Input
                v-model="address"
                placeholder="收货人地址"
                clearable
                style="width: 400px"
                size="large"
              />
            </div>
            <Checkbox v-model="single" class="m-t-20">设为默认</Checkbox>
           
          </Modal>
        </div>
        <div class="shopping d-f a-i-c">
          <div class="m-l-20">姓名</div>
          <div class="shopping1">详细地址</div>
          <div class="shopping1">电话</div>
        </div>
        <div class="list-title1">
          <div class="list-title2 d-f f-d-c j-c-c a-i-c" v-if="this.arr.length<0">
            <div>
              <div class="f-s-18">你还未添加收货地址</div>
              <Button label="large" size="small" class="m-l-20" @click="modal13  = true">添加地址</Button>
            </div>
          </div>
          <div v-else class="list-title2">
            <div v-for="(item,index) in arr" :key="index">
            <div class="d-f">
             <div>{{item.username}}</div>
             <div>{{item.phone}}</div>
             <div></div>
             </div>
            </div>
          </div>
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
      username: "",
      modal13: false,
      single: false,
      username: "",
      phone: "",
      address: "",
      arr:[]
    };
  },
  components: {},
  methods: {
    ok() {
        this.$api
      .addAddress({
        username: this.username,
        phone: this.phone,
        address: this.address,
        isDefault:this.single
      })
      .then(res => {
         this.$Message.info("成功添加地址");
        
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
     
    },
    cancel() {
      this.$Message.info("取消添加地址");
    },
    list(){
     
    }
  },
  mounted() {
    this.username = localStorage.getItem("username");
    console.log(this.username);
    this.$api.list().then(res=>{
      this.arr=res.data
      console.log(res);
    }).catch(err=>{
      console.log(err);
    })
   
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.list {
  width: 210px;
  height: 450px;
  background: white;
  border-radius: 10px;
  margin-left: 170px;
}
.products1 {
  width: 950px;
  height: 60px;
  margin-left: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.list-title {
  margin-right: 20px;
}
.shopping {
  width: 950px;
  height: 40px;
  margin-left: 20px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.06);
  background: linear-gradient(#fbfbfb, #ececec);
}
.shopping1 {
  padding: 0 150px;
}
.list-title1 {
  width: 950px;

  background: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 20px;
}
.list-title2 {
  width: 950px;
  height: 400px;
}
.list1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  margin-top: 20px;
}
.title2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.list2 {
  width: 100%;
  height: 1px;
  background: rgb(221, 218, 218);
}
.lists {
  width: 100%;
  height: 50px;
}
.lists:hover .list3 {
  background: rgb(152, 175, 238);
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listss {
  background: rgb(152, 175, 238);
  width: 100%;
  height: 50px;
}
.list1 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid black;
  margin-top: 20px;
}
.title2 {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.list2 {
  width: 100%;
  height: 1px;
  background: rgb(221, 218, 218);
}
.lists {
  width: 100%;
  height: 50px;
}
.lists:hover .list3 {
  background: rgb(152, 175, 238);
  width: 100%;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
.listss {
  background: rgb(152, 175, 238);
  width: 100%;
  height: 50px;
}
.button {
  width: 400px;
  height: 55px;
}
</style>