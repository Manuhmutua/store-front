<template>
<Nav name="OpenDuka.com" class="sticky"/>
<div>
<div class="grid grid-cols-1 lg:grid-cols-6">
  <div>
  <Filter class="sticky"/>
  </div>
  <div class="col-span-5">
  <ProductGridView title="Ladies Collection" description="All deals are 60% off for new Buyers!"/>
  </div>
</div>
</div>
</template>
<script>

import Nav from './Nav.vue'
import ProductGridView from './ProductGridView.vue'
import Filter from './Filter.vue'

export default {
  name: 'ProductFilterView',
  components: {
    Nav,
    ProductGridView,
    Filter
  }
}
	
</script>
<style scoped>
	
</style>