<template>
  <Nav name="OpenDuka.com" class="sticky"/>
  <Carousel/>
  <ProductGridView title="Deals of the day." description="All deals are 60% off!" />
  <Banner/>
  <ProductCategoriesGridView title="Our Categories." description="All deals are 60% off!"/>
  <HorizontalProductScroll/>
  <Footer/>
</template>

<script>

import Nav from './Nav.vue'
import Carousel from './Carousel.vue'
import ProductGridView from './ProductGridView.vue'
import Banner from './Banner.vue'
import ProductCategoriesGridView from './ProductCategoriesGridView.vue'
import Footer from './Footer.vue'

export default {
  name: 'Homepage',
  components: {
    Nav,
    Carousel,
    ProductGridView,
    Banner,
    ProductCategoriesGridView,
    Footer
  }
}
</script>
  

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
