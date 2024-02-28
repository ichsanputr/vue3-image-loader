# Vue 3 Image Loader

![Vue 3 image loader preview](https://s6.ezgif.com/tmp/ezgif-6-e0deabb98e.gif)

Vue 3 package for showing a loader while an image loading with default using skeleton loader.

## Installation

```bash
npm install vue-loader-image

// or use yarn
yarn add vue-loader-image
```

## Usage

### Importing

This package support either composition and options api with typescript used.

```vue
<script lang="ts">
import VueLoaderImage from 'vue3-loader-image';
import 'vue3-loader-image/dist/style.css'
</script>
```

Or use option api.

```vue
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
      VueLoaderImage
  }
})
</script>
```
### Example

We can use delay props to increase the time the image will be displayed, because sometimes the loader doesn't come out because the internet speed is good during the loading process.

```vue
<VueLoaderImage delay="4000" src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1973" width="300px" height="300px"></VueLoaderImage>
```
That's will be show image after image loaded plus 4 second.

Beside skeleton loader you also can use custom css loader like using slot like this.

```vue
<template>
<VueLoaderImage delay="4000" src="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=1973" width="300px" height="300px">
  <div class="loader"/>
</VueLoaderImage>
</template>
<style>
// loader css animation & style here
</style>
```

See more css loader on [https://css-loaders.com](https://css-loaders.com/).

## Props

| Attribute    |   Type   |    Is Required     | Description                                                                   |
|:-------------|:--------:|:--------------:|:------------------------------------------------------------------------------|
| src      |  String  |       true       | Image source url which will be displayed                                               |
| width         |  String  |   true    | Width of image, accepting all unit measurentment (1px, 1rem, 1%, etc)                      |
| height     |  String  | true | Same like width |
| delay     |  String  |     no     | Image will be show after loaded plus delay value        |
| circle  | Boolean  |     no     | Border radius 100%                                                |
| pill      | String |       no       | Border radius custom value    
| alt      | String |       no       | --
| crossorigin      | String |       no       | --
| loading      | String |       no       | --
| longdesc      | String |       no       | --

