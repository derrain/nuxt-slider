<script setup>
  import { ref, computed } from 'vue';

  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
    navBgShape: {
      type: String,
      required: false,
    },
    sliderWidth: {
      type: String,
      required: false,
    }
  });

  const navBtnRadius = computed(() => 
    props.navBgShape === undefined || props.navBgShape.toLowerCase() === 'square' ?
      '0' :
      '50%');
  const sliderWidth = props.sliderWidth === undefined ? '800px' : props.sliderWidth;

  const currentIndex = ref(0);

  const prevSlide = () => {
    currentIndex.value =
      currentIndex.value === 0 ?
        props.images.length - 1 :
        currentIndex.value - 1;
  };

  const nextSlide = () => {
    currentIndex.value =
      currentIndex.value === props.images.length - 1 ?
        0 :
        currentIndex.value + 1;
  };
</script>

<template>
  <div class="slider-container" :style="{ maxWidth: sliderWidth }">
    <div class="slider">
      <div
        role="img"
        v-for="(image, index) in props.images" 
        :key="index" 
        class="slide" 
        :aria-label="image.alt === '' ? image.src : image.alt"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url('${image.url}')` }"
      >
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button class="prev" @click="prevSlide" :style="{ borderRadius: navBtnRadius }">
      <font-awesome icon="chevron-left" />
    </button>
    <button class="next" @click="nextSlide" :style="{ borderRadius: navBtnRadius }">
      <font-awesome icon="chevron-right" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .slider-container {
    width: 100%;
    max-width: 1200px;
    height: 400px;
    position: relative;
    margin: auto;
    overflow: hidden;

    .slider {
      width: 100%;
      height: 100%;
      display: flex;
      position: relative;
      transition: transform .5s ease-in-out;

      .slide {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: opacity .5s ease-in-out;
        opacity: 0;

        &.active {
          opacity: 1;
          z-index: 1;
        }
      }
    }

    button {
      background: rgb(0 0 0 / .5);
      color: white;
      top: 50%;
      position: absolute;
      padding: 1rem 1.175rem;
      border: none;
      transform: translateY(-50%);
      cursor: pointer;
      z-index: 10;

      &.prev {
        left: 1rem;
      }

      &.next {
        right: 1rem;
      }
    }
  }
</style>
