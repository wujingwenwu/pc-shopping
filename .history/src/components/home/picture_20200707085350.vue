<template>
 <div>
 <div class="d-f">
   <div v-for="(item,index) in arrs" :key="index">
   <div class="picture">
    <img :src="item.picUrl" alt="" width="304" height="200">
    </div>
    </div>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
         arrs: {
      type: Array,
      default: () => []
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