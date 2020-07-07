<template>
 <div>
  <div class="six d-f p-r j-c-s-b">
  <div v-for="(item,index) in arrv" :key="index" class="six2">
  <div v-if="index>0">
   <img :src="item.picUrl" alt="" height="200" class="six1" >
  </div>
     </div>
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
      arrv: {
      type: Array,
      default: () => []
    },
    },
   data () {
     return {

   }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.six{
    width: 1220px;
    height: 200px;
    background: white;
    margin-top: 320px;
    margin-left: 170px;
    border-radius: 10px;
}
.six1{
    margin-right: 102px;
    &:first-child{
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;

    }
    
}
.six2{
      position: relative;
  display:inline-block;
   *display:inline;
}
.six2:hover:before{
             content:"";
            position:absolute;
            width:100%;
            height:100%;
            box-shadow:inset 1px 1px 10px;
            -webkit-box-shadow:0 0 30px #ccc inset;
            -moz-box-shadow:0 0 30px #ccc inset;
            -o-box-shadow:0 0 30px #ccc inset;
             border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    
}
</style>