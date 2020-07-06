<template>
 <div>
    <Carousel autoplay v-model="value2" loop v-for="(item,index) in arr" :key="index">
        <CarouselItem>
         <img :src="item" alt="">  
        </CarouselItem>
        <CarouselItem>
            
        </CarouselItem>
        <CarouselItem>
            
        </CarouselItem>
        <CarouselItem>
           
        </CarouselItem>
    </Carousel>
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