# Vue 3 Image Loader
<p align="left">
<a href="https://www.npmjs.com/package/vue-navigation-bar"><img src="https://img.shields.io/bundlephobia/minzip/vue3-loader-image"
</a>
  <a href="https://www.npmjs.com/package/vue-navigation-bar"><img src="https://img.shields.io/npm/dt/vue3-loader-image.svg" alt="NPM Downloads"></a>
  <a href="http://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  
</p>

Vue 3 package for showing a loader while an image loading with default using skeleton loader.
<p align="center" width="100%">
    <img width="80%" src="https://i.ibb.co/wCfzGp8/ezgif-1-4b6f9e880f.gif"> 
</p>

## Installation

```bash
npm install vue3-loader-image

// or use yarn
yarn add vue3-loader-image
```

## Usage

### Importing

This package support either composition and options api with typescript.

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
import VueLoaderImage from 'vue3-loader-image';
import 'vue3-loader-image/dist/style.css'

export default defineComponent({
  components: {
      VueLoaderImage
  }
})
</script>
```
### Example

By default this package uses a skeleton loader, and there are 3 props that must be filled in, they are src, width, and height

```vue
<VueLoaderImage src="https://images.unsplash.com/photo-1439066615861-d1af74d74000" width="300px" height="300px"></VueLoaderImage>
```

We can use delay props to increase the time the image will be displayed, because sometimes the loader doesn't come out because the internet speed is good during the loading process or image was cached.

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
.loader {
    // loader css animation & style here
}
</style>
```
<br>
<p align="center">
<img width="50%" src="https://i.ibb.co/KrQDtXk/untitled.gif" />
</p>
See more css loader on <a href="https://css-loaders.com">https://css-loaders.com</a>.

## Props

For width, height, and pill accept string as intact css measurement units, please provide the unit Measurement after the value.

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

