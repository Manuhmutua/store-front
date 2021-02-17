<template>
<div>
  <Nav name="OpenDuka.com" class="sticky"/>
  <Carousel/>
  <ProductGridView title="Deals of the day." description="All deals are 60% off!" />
  <Banner/>
  <ProductCategoriesGridView title="Our Categories." description="All deals are 60% off!"/>
  <HorizontalProductScroll/>
  <Footer/>
</div>

</template>

<script>
import Nav from './components/Nav.vue'
import Carousel from './components/Carousel.vue'
import ProductGridView from './components/ProductGridView.vue'
import Banner from './components/Banner.vue'
import ProductCategoriesGridView from './components/ProductCategoriesGridView.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sticky {
  position: sticky;
  top: 0;
}
</style>
