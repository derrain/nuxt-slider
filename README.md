# nuxt-slider
A simple image slider component with customisable properties

## Live Demo
[Nuxt3 Image Slider Demo](https://nuxt-slider.vercel.app/)

## How to Use
`npm i nuxt3-image-slider`

```
import { ImageSlider } from "nuxt3-image-slider";

<ImageSlider />
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
