# nuxt-slider
A simple image slider component with customisable properties

## Live Demo
[Image Slider Demo](https://nuxt-slider.vercel.app/)

## How to Use
`npm i @derrainds/image-slider`


`npm add -D @derrainds/image-slider`

## Important to Install
`npm i @vesp/nuxt-fontawesome @fortawesome/free-solid-svg-icons npm install -D sass-embedded`

#### `nuxt.config.ts`
```
  export default defineNuxtConfig({
    // ...,
    extends: [
      "@derrainds/image-slider",
    ],
  });
```

#### `index.vue`
```
<script setup>
  // ImageSlider image array
</script>

<template>
  <ImageSlider />
</template>
```
## Props
| Prop      | Required | Values               | Default   | Description
| --------- | -------- | -------------------- | --------- | -----------
| images    | *        | Array                | undefined | List of images with url and alt.
| navBgShape| -        | 'square' or 'circle' | 'square'  | 'square' or 'circle' for navigation buttons.
| autoplay  | -        | Boolean              | true      | Enable/disable automatic sliding.
| maxWidth  | -        | String               | '800px'   | Set max width of slider.
| slideStyle| -        | 'fade' or 'slide'    | 'fade'    | 'fade' or 'slide' transition style.

## License
MIT
