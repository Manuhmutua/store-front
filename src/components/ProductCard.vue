<template>
  <div style="width: 250px; padding-bottom: 30px;">
    <img class="rounded" :src="img" :alt="imgAlt">
    <div class="mt-2">
      <div>
        <div class="font-bold text-gray-700 leading-snug">
          <a :href="url" class="hover:underline">{{ title }}</a>
        </div>
        <div class="mt-2 text-sm text-gray-400">{{ eyebrow }}</div>
        <div class="mt-2 text-sm text-gray-600 font-bold" style="padding-bottom: 15px;">{{ pricing }}</div>
      </div>
    </div>

    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" style="width: 250px;">
      Buy Now
    </button>
  </div>
</template>

<script>
  export default {
    name: 'ProductCard',
    props: ['img', 'imgAlt', 'eyebrow', 'title', 'pricing', 'url']
  }
</script>