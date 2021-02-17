<template>
  <div>
    <p class="text-black font-bold" style="font-size: 25px; padding-top: 75px; font-style: bold;">
      {{title}}
    </p>
    <p class="text-grey">
      {{description}}
    </p>
  </div>
  <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2" style="padding: 120px;">
 
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
    See All Deals
  </p>
</template>

<script>

import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductGridView',
  components: {
    ProductCard
  },
  props: ['title', 'description']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
