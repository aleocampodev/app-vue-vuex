<template>
		<div class="col-12 col-sm-4 col-md-3 col-lg-3 mb-3 mb-3">
			<div class="card">
				<img :src="producto.thumbnailUrl" :alt="`imagen ${producto.title}`" class="card-img-top" />
				<div class="card-body">
				<h5 class="card-title">{{producto.title}}</h5>
				<p class="card-text">$ <span>{{producto.precio}}</span></p>
				<button class="btn btn-dark" @click="comprar(producto)">Comprar</button>
				</div>
			</div>
		</div>

</template>

<script>
export default {
	props:['producto'],
}
</script>

