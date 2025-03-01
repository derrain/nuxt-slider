<script setup>
  import { ref } from 'vue';
  import CodeSnippet from '~/components/code-snippet.vue';

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

  const maxWidthOptions = [
    '800px',
    '1200px',
    '50%',
    '100%',
  ];

  const transitionStyles = [
    'fade',
    'slide',
  ];

  const selectedShape = ref('square');
  const autoplayActive = ref(true);
  const selectedMaxWidth = ref(maxWidthOptions[0]);
  const selectedTransitionStyle = ref(transitionStyles[0]);

  const sliderCode = `
    <ImageSlider
      :images=[{ url: '/image1.jpg', alt: 'image 1' }, { url; 'image2.jpg', alt: 'image 2' }, { ... }] // Expects an array of images with their 'alt' value
      :navBgShape="'square' | 'circle'" // Default is 'square'
      :autoplay="true | false" // Toggle autoplay on/off, default is true
      maxWidth="800px | 1200px | 50% | 100%" // Default is '800px'
      slideStyle="fade | slide" // Default is 'fade'
    />
  `;
</script>

<template>
  <section class="slider-demo">
    <h1>Welcome to NuxtSlider</h1>
    <ImageSlider
      :images="images"
      :navBgShape="selectedShape"
      :autoplay="autoplayActive"
      :maxWidth="selectedMaxWidth"
      :slideStyle="selectedTransitionStyle" />
  </section>

  <section class="slider-props">
    <h2>Image Slider Properties</h2>
    <div class="property-options">
      <div class="form-group">
        <label>Prev/Next button shape</label>
        <div class="radio-btn-group">
          <label for="square">
            <input type="radio" id="square" name="navBgShape" value="square" v-model="selectedShape" />
            Square (Default)
          </label>
          <label for="circle">
            <input type="radio" id="circle" name="navBgShape" value="circle" v-model="selectedShape" />
            Circle
          </label>
        </div>
      </div>

      <div class="form-group">
        <label>Autoplay</label>
        <div class="radio-btn-group">
          <label for="autoplayTrue">
            <input type="radio" id="autoplayTrue" name="autoplayActive" :value="true" v-model="autoplayActive" />
            On (Default)
          </label>
          <label for="autoplayFalse">
            <input type="radio" id="autoplayFalse" name="autoplayActive" :value="false" v-model="autoplayActive" />
            Off
          </label>
        </div>
      </div>

      <div class="form-group">
        <label for="maxSlideWidth">Max width</label>
        <select name="maxSlideWidth" id="maxSlideWidth" v-model="selectedMaxWidth">
          <option
            v-for="maxWidthOption in maxWidthOptions"
            :key="maxWidthOption"
            :value="maxWidthOption">
            {{ maxWidthOption === '800px' ? `${maxWidthOption} (Default)` : maxWidthOption }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="transitionStyle">Transition style</label>
        <select name="transitionStyle" id="transitionStyle" v-model="selectedTransitionStyle">
          <option
            v-for="transitionStyle in transitionStyles"
            :key="transitionStyle"
            :value="transitionStyle">
            {{ transitionStyle === 'fade' ? `${transitionStyle} (Default)` : transitionStyle }}
          </option>
        </select>
      </div>
    </div>
  </section>

  <section class="slider-implementation">
    <h2>Image Slider Usage</h2>
    <CodeSnippet :code="sliderCode" />
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
      max-width: 800px;
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
      margin: auto;

      .property-options {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        .form-group {
          display: grid;
          margin-bottom: 1rem;

          > label {
            padding-bottom: 1rem;
          }

          .radio-btn-group {
            label {
              cursor: pointer;
            }
          }
        }

        @media screen and (min-width: 991px) {
          grid-template-columns: repeat(3, 1fr);
        }

        @media screen and (min-width: 768px) and (max-width: 990px) {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    }

    &.slider-implementation {
      display: grid;
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }
</style>
