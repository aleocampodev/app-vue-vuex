import { createStore } from 'vuex'

export default createStore({
  state: {
    productos: [],
    carrito:{}
  },
  mutations: {
    setProductos(state, payload ){
      state.productos = payload;
      console.log(state.productos)
    },
    setCarrito(state,payload){
      state.carrito[payload.id] = payload
    }
  },
  actions: {
    async fetchData({commit}){
      try{
        const res = await fetch('api.json');
        const data = await res.json
        commit('setProducto' ,data)
      } catch(error){
        console.log(error)
      }
    },
    agregarAlCarrito({commit,state},producto){
      state.carrito.hasOwnProperty(producto.id)
      ? producto.cantidad= state.carrito[producto.id].cantidad  + 1
      : producto.cantidad = 1
      commit('setCarrito', producto)
    }
  },
  modules: {
  }
})
