<template>
 <div>
  <div class="six" >
  <div v-for="(item,index) in arrv" :key="index">
  <div v-if="index>0">
   <img :src="item.picUrl" alt="" height="200">
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
</style>