<script setup>
  import { ref, computed, onMounted, onUnmounted } from 'vue';

  const props = defineProps({
    images: {
      type: Array,
      required: true,
    },
    navBgShape: {
      type: String,
      required: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
      default: true,
    },
    maxWidth: {
      type: String,
      required: false,
      default: "800px",
    },
    slideStyle: {
      type: String,
      required: false,
      default: "fade",
    }
  });

  const navBtnRadius = computed(() => 
    props.navBgShape === undefined || props.navBgShape.toLowerCase() === 'square' ?
      '0' :
      '50%');
  const sliderWidth = computed(() => props.maxWidth);

  const currentIndex = ref(0);
  let interval = null;

  const prevSlide = () => {
    currentIndex.value =
      currentIndex.value === 0 ?
        props.images.length - 1 :
        currentIndex.value - 1;
    restartAutoplay();
  };

  const nextSlide = () => {
    currentIndex.value =
      currentIndex.value === props.images.length - 1 ?
        0 :
        currentIndex.value + 1;
    restartAutoplay();
  };

  const startAutoplay = () => {
    if (props.autoplay) {
      interval = setInterval(nextSlide, 5000);
    }
  };

  const stopAutoplay = () => {
    if (interval) {
      clearInterval(interval);
    }
  };

  const restartAutoplay = () => {
    stopAutoplay();
    startAutoplay();
  };

  onMounted(() => startAutoplay());

  onUnmounted(() => stopAutoplay());

  watch(() => props.autoplay, (newVal) => {
    if (newVal)
      startAutoplay();
    else
      stopAutoplay();
  });
</script>

<template>
  <div class="slider-container" :style="{ maxWidth: sliderWidth }">
    <div
      :class="`slider ${slideStyle}`"
      :style="{ transform: slideStyle === 'slide' ? `translateX(-${currentIndex * 100}%)` : '' }">
      <div
        role="img"
        v-for="(image, index) in props.images" 
        :key="index" 
        class="slide" 
        :aria-label="image.alt === '' ? image.src : image.alt"
        :class="{ active: slideStyle === 'fade' && index === currentIndex }"
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

      &.slide {
        width: 100%;
        display: flex;
        position: relative;
        transition: transform .5s ease-in-out;

        .slide {
          flex: 0 0 100%;
          position: relative;
          opacity: 1;
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
