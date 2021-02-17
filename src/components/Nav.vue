<template>
  <div class="hello">

    <nav class="flex shadow px-8 py-6 items-center justify-between flex-wrap sticky" style="background: #000000;">
      <!-- Website Branding -->
      <div class="flex items-center flex-grow flex-shrink lg:pb-0">
        <h2 class="text-white hover:text-blue-500 font-bold" style="font-size: 22px;">{{ name }}</h2>
      </div>
      <!-- Menu toogle button -->
      <div class="block lg:hidden md:hidden">
        <button class="flex items-center px-3 py-2 text-dark outline-none" aria-label="Menu">
          <svg class="h-6 w-6 text-dark" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 20 20" width="24" height="24"><path d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" /></svg>
        </button>
      </div>

      <div class="w-full flex-grow flex lg:items-right lg:w-auto lg:block">
        <div class="lg:flex-grow">
          <div class="lg:float-left sm:float-right">
            <!-- Search -->
            <div class="block py-4 mt-4 lg:inline-block lg:mt-0 lg:py-0 lg:mr-8">
              <div class="relative">
                <input name="q" class="w-full outline-none rounded shadow-lg appearance-none border pl-10 pr-4 py-2" placeholder="Search for products and shops..." style="width: 440px;" aria-label="Search Input">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">        
        <a href="#login" class="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          <svg fill="#FFFFFF" id="Capa_1" enable-background="new 0 0 551.13 551.13" height="24" viewBox="0 0 551.13 551.13" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m499.462 0h-378.902c-9.52 0-17.223 7.703-17.223 17.223v51.668h34.446v-34.445h344.456v482.239h-344.456v-34.446h-34.446v51.668c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223v-516.684c0-9.52-7.704-17.223-17.223-17.223z"/><path d="m204.588 366.725 24.354 24.354 115.514-115.514-115.514-115.514-24.354 24.354 73.937 73.937h-244.079v34.446h244.08z"/></svg>
        LogIn</a>


        <a class="block md:inline-block text-white hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 450.391 450.391" style="enable-background:new 0 0 450.391 450.391;" xml:space="preserve" fill="#FFFFFF" width="24" height="24">
          <g>
            <g>
              <g>
                <path d="M143.673,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02
                  c25.969,0,47.02-21.052,47.02-47.02C190.694,371.374,169.642,350.322,143.673,350.322z M143.673,423.465
                  c-14.427,0-26.122-11.695-26.122-26.122c0-14.427,11.695-26.122,26.122-26.122c14.427,0,26.122,11.695,26.122,26.122
                  C169.796,411.77,158.1,423.465,143.673,423.465z"/>
                <path d="M342.204,350.322c-25.969,0-47.02,21.052-47.02,47.02c0,25.969,21.052,47.02,47.02,47.02s47.02-21.052,47.02-47.02
                  C389.224,371.374,368.173,350.322,342.204,350.322z M342.204,423.465c-14.427,0-26.122-11.695-26.122-26.122
                  c0-14.427,11.695-26.122,26.122-26.122s26.122,11.695,26.122,26.122C368.327,411.77,356.631,423.465,342.204,423.465z"/>
                <path d="M448.261,76.037c-2.176-2.377-5.153-3.865-8.359-4.18L99.788,67.155L90.384,38.42
                  C83.759,19.211,65.771,6.243,45.453,6.028H10.449C4.678,6.028,0,10.706,0,16.477s4.678,10.449,10.449,10.449h35.004
                  c11.361,0.251,21.365,7.546,25.078,18.286l66.351,200.098l-5.224,12.016c-5.827,15.026-4.077,31.938,4.702,45.453
                  c8.695,13.274,23.323,21.466,39.184,21.943h203.233c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449
                  H175.543c-8.957-0.224-17.202-4.936-21.943-12.539c-4.688-7.51-5.651-16.762-2.612-25.078l4.18-9.404l219.951-22.988
                  c24.16-2.661,44.034-20.233,49.633-43.886l25.078-105.012C450.96,81.893,450.36,78.492,448.261,76.037z M404.376,185.228
                  c-3.392,15.226-16.319,26.457-31.869,27.69l-217.339,22.465L106.58,88.053l320.261,4.702L404.376,185.228z"/>
              </g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
          </svg>
        Cart</a>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    name: String
  }
}
</script>

<style scoped="css">

</style>
