<template>
    <div class="my-5">
        <h4>Carrito de compras</h4>
        <table class="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Item</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Acción</th>
                <th scope="col">Total</th>
            </tr>
            </thead>
            <tbody id="items">
            </tbody>
            <tfoot>
            <tr id="footer-carrito">
                <th scope="row" colspan="5" v-if="Object.keys(carrito).length === 0">Carrito vacío - comience a comprar!</th>
                <Footer v-else/>
            </tr>
            </tfoot>
        </table>
    </div>
</template>
  


<script>
// import {computed} from 'vue'
import {useStore} from 'vuex'
export default {
	setup(){
		const store= useStore()
		//const items = computed(() => store.state.carrito)
	}
}
</script>

<style>

</style>