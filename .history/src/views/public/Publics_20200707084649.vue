<template>
 <div>
 <Heads></Heads>
   <router-view class="router"></router-view>
   <Bottom></Bottom>
 </div>
</template>

<script>
import Heads from '../../components/publics/Heads'
import Bottom from '../../components/publics/Bottom'
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
.router{
  background: ;
  width: 100%;
}
</style>