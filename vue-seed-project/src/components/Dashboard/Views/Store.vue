<template>
<table style="width:100%">
<tr>
  <td><button>Create New Product</button></td>

</tr>
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Price</th>
    <th>CreatedAt</th>
    <th>Updatedat</th>
    <th>Seller</th>
    <th>Actions</th>
  </tr>

  <tr v-for="Store_alias in Products.data">
    <td>{{Store_alias.id}} </td>
    <td>{{Store_alias.name}} </td>
    <td>{{Store_alias.price}} </td>
    <td>{{Store_alias.createdAt}} </td>
    <td>{{Store_alias.updatedAt}} </td>
    <td>{{Store_alias.seller}} </td>
    <td><button>update</button><td><button v-on:click="del(Store_alias._id)">delete</button></td></tr></td></td>
  </tr>

</table>
</template>

<script>
import axios from 'axios'
export default{
  name: 'Store',
  data () {
    return {
      Products: []
    }
  },
  methods:
  {
    del: function (id) {
      axios.delete('http://localhost:3000/api/product/deleteProduct/' + id)
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/product/getProducts')
      .then(response => {
        this.Products = response.data
      })
            .catch(e => {
              this.errors.push(e)
            })
  }

}

</script>
