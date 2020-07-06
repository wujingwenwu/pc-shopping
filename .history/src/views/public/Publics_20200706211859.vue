<template>
 <div>
 <Heads></Heads>
   <router-view></router-view>
   <Bottom></Bottom>
 </div>
</template>

<script>
import Heads from '../../components/pulics/Heads'
import Bottom from '../../components/pulics/Bottom'
 export default {
   name:'',
   props:{

    },
   data () {
     return {

   }
   },
   components: {
      Bottom,
      Heads
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