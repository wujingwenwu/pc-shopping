<template>
 <div>
 <div >
    <Carousel  v-model="value2" autoplay >
        <CarouselItem >
        <div v-for="(item,index) in arr" :key="index" class=" p-r">
         <img :src="item.picUrl" alt=""> 
         <img :src="item.picUrl2" alt="" class="p-a"> 
         <img :src="item.picUrl3" alt="" class="p-a"> 
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