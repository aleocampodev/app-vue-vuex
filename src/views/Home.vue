<template>
  <div class="home">
    
    <img alt="Vue logo" src="../assets/logo.png">
    <Title msg="Bienvenido"/>
    {{productos}}
    <div class="row">
      <Card
        v-for="producto of productos" :key="producto.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {useStore} from 'vuex'
import { computed, onMounted } from 'vue'
import Title from '@/components/Title.vue'
import Card from '../components/Card.vue'
import { onMounted } from '@vue/runtime-core'

export default {
  name: 'Home',
  components: {
    Title,
    Card
  },
  setup(){
    const store= useStore()
    onMounted(() => {
      console.log("onMounted")
      store.dispatch('fetchData')
    })

    const productos = computed(() => store.state.productos)

    return{productos}
  
  }
}
</script>
