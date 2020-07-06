<template>
 <div>
 <div >
    <Carousel  v-model="value2" autoplay >
        <CarouselItem >
        <div v-for="(item,index) in arr" :key="index">
         <img :src="item.picUrl" alt=""> 
         <img :src="item.picUrl2" alt=""> 
         </div>
        </CarouselItem>
       
    </Carousel>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   props:{
      arr: {
      type: Array,
      default: () => []
    }
    },
   data () {
     return {
     value2: 0
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