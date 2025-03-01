<script setup>
  import { ref } from 'vue';

  const images = [
    {
      url: '/slide-1.jpg',
      alt: 'Slider 1',
    },
    {
      url: '/slide-2.jpg',
      alt: 'Slider 2',
    },
    {
      url: '/slide-3.jpg',
      alt: 'Slider 3',
    },
  ];

  const selectedShape = ref('circle');
</script>

<template>
  <section class="slider-demo">
    <h1>Welcome to NuxtSlider</h1>
    <ImageSlider
      :images="images"
      :navBgShape="selectedShape" />
  </section>

  <section class="slider-props">
    <div class="form-group">
      <label>Prev/Next button shape</label>
      <label for="square">
        <input type="radio" id="square" name="navBgShape" value="square" v-model="selectedShape" />
        Square (Default)
      </label>
      <label for="circle">
        <input type="radio" id="circle" name="navBgShape" value="circle" v-model="selectedShape" />
        Circle
      </label>
    </div>
  </section>
</template>

<style lang="scss">
  * {
    z-index: 10;
  }

  section {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: #fff;

    &.slider-demo {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }

    &.slider-props {
      display: grid;
    }
  }
</style>
