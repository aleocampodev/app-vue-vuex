<template>
  <div class="container">
    <img alt="Car shopping" src="../assets/car.png">
    <Title msg="Carrito de compras"/>
    <pre>
      {{productos}}
    </pre>
    <div class="row">
      <Card />
    </div>
    
  </div>
</template>

<script>
// import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Title from '@/components/Title.vue'
import Card from '@/components/Card.vue'
// import Carrito from '../components/Carrito.vue'

export default {
  name:'Home',
  components: {
    Title,
    Card

  },
  setup(){
    //const store= useStore()
    onMounted(() =>{
      console.log("onMounted")
      // store.dispatch('fetchData')
    })

    //const productos = computed(() => store.state.productos)
    // const carrito = computed(() => store.state.carrito)

    // return{productos,carrito}
  
  }
}
</script>
