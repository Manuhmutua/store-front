<template>
  <div>
    <p class="text-black font-bold" style="font-size: 25px; padding-top: 20px; font-style: bold;">
      {{title}}
    </p>
    <p class="text-grey">
      {{description}}
    </p>
  </div>
  <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-2" style="padding-left: 140px; padding-right: 140px; padding-top: 20px;">
 
    <div class="justify-self-center">  
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
        @click="navigateToProduct()"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>

    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
    <div class="justify-self-center">
      <ProductCard
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/1200px-Hausziege_04.jpg"
        imgAlt="Beach in Cancun"
        eyebrow="Private Villa"
        title="Relaxing All-Inclusive Resort in Cancun"
        pricing="20,000 KSH"
        url="/vacations/cancun"
      />
    </div>
  </div>
  <p class="text-grey font-bold hover:text-blue-500" style="padding: 50px;
  ">
    {{button}}
  </p>
</template>

<script>

import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGridView',
  components: {
    ProductCard
  },
  props: ['title', 'description','button'],
  methods: {
    navigateToProduct() {
        this.$router.push({ name: 'ProductView', params: { productId: 'product-1' } })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
