<template>
  <div>
    <p class="text-black font-bold sm:text-center md:text-center xl:text-right 2xl:text-right" style="font-size: 25px; padding-top: 90px; font-style: bold;">
      Filter
    </p>
    <div class="sm:text-center md:text-center xl:text-right 2xl:text-right" style="padding-top: 10px;">
      <p class="font-bold" style="padding-top: 20px;">Choose one:</p>
      <div>
        <label class="container">Products
        <input type="radio" name="gender" value="products" checked="true">
        <span class="radio"></span>
      </label><br>
      <label class="container">Shops
        <input type="radio" name="gender" value="shops" >
        <span class="radio"></span>
      </label>  
      </div>
    </div>

    <div class="sm:text-center md:text-center xl:text-right 2xl:text-right">
      <p class="font-bold" style="padding-top: 20px;">Quick Filters</p>
      <div>
        <label class="container">On Sale
          <input type="checkbox" name="gender" value="on_sale">
          <span class="checkbox"></span>
        </label><br>
        <label class="container">Verified Shops
          <input type="checkbox" name="gender" value="verified_shops" >
          <span class="checkbox"></span>
        </label><br> 
        <label class="container">New Products
          <input type="checkbox" name="gender" value="new_products" >
          <span class="checkbox"></span>
        </label> 
      </div>
    </div>

    <div class="sm:text-center md:text-center xl:text-right 2xl:text-right">
      <p class="font-bold" style="padding-top: 20px;">Categories</p>
      <ul>
        <li class="hover:text-blue-500"><a href="#"></a>T shirts</li>
        <li class="hover:text-blue-500"><a href="#"></a>Trousers</li>
        <li class="hover:text-blue-500"><a href="#"></a>Shoes</li>
        <li class="hover:text-blue-500"><a href="#"></a>Ties</li>
        <li class="hover:text-blue-500"><a href="#"></a>Dresses</li>
      </ul>  
    </div>

    <div class="sm:text-center md:text-center xl:text-right 2xl:text-right">
      <p class="font-bold" style="padding-top: 20px;">Collection</p>
      <ul>
        <li class="hover:text-blue-500"><a href="#"></a>Ladies</li>
        <li class="hover:text-blue-500"><a href="#"></a>Male</li>
        <li class="hover:text-blue-500"><a href="#"></a>T shirt</li>
        <li class="hover:text-blue-500"><a href="#"></a>Vintage</li>
        <li class="hover:text-blue-500"><a href="#"></a>Shoes</li>
      </ul>  
    </div>

  </div>
</template>

<script>

export default {
  name: 'Filter'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
