<template>
 <div>
  <div class="products1 d-f a-i-c">
    <div class=" m-l-20 f-s-18">{{obj.name}}</div>
   </div>

  <div v-for="(item,index) in arrz" :key="index">
  
  </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
            arrz: {
      type: Array,
      default: () => []
    },
    objz:{
         type: Object,
      default: () => {} 
    }
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

</style>