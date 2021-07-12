<template>
  <th scope="row" colspan="2">Total productos</th>
    <td>{{totalCantidad}}</td>
    <td>
        <button class="btn btn-danger btn-sm" id="vaciar-carrito" @click="vaciar">
            vaciar todo
        </button>
    </td>
    <td class="font-weight-bold">$ <span>{{totalPrecio}}</span></td>
</template>
