<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref } from 'vue'

const showImage = ref(false)
const props = defineProps<{
  src: string
  width: string
  height: string
  circle?: boolean
  pill?: string
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  loading?: 'eager' | 'lazy'
  longdesc?: string
}>()

onMounted(async () => {
  await nextTick()

  const skeleton = document.getElementById('skeleton')
  const img = document.getElementById('img')

  skeleton!.style.width = props.width
  skeleton!.style.height = props.height
  img!.style.width = props.width
  img!.style.height = props.height

  if (props.circle) {
    skeleton!.style.borderRadius = '100%'
    img!.style.borderRadius = '100%'
    return
  }

  if (props.pill) {
    skeleton!.style.borderRadius = props.pill
    img!.style.borderRadius = props.pill
  }
})
</script>

<template>
  <div v-if="!showImage && $slots.default" class="fit">
    <slot />
  </div>
  <div v-else-if="!showImage && !$slots.default" id="skeleton" />
  <img :alt="props.alt" :crossorigin="props.crossorigin" :loading="props.loading" :longdesc="props.longdesc"
    style="object-fit: cover" id="img" @load="showImage = true" v-show="showImage" :src="props.src" />
</template>
<style>
#skeleton {
  width: 300px;
  height: 300px;
  border-radius: 5px;
  background: #e2e5e7;
  background: -webkit-gradient(linear, left top, right top, color-stop(8%, rgba(130, 130, 130, 0.2)), color-stop(18%, rgba(130, 130, 130, 0.3)), color-stop(33%, rgba(130, 130, 130, 0.2)));
  background: linear-gradient(to right, rgba(130, 130, 130, 0.2) 8%, rgba(130, 130, 130, 0.3) 18%, rgba(130, 130, 130, 0.2) 33%);
  background-size: 800px 100px;
  animation: wave-squares 1.8s infinite ease-out;
}

@keyframes wave-squares {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}

.flex {
  display: flex;
}

.center {
  justify-content: center;
  align-items: center;
}

.fit {
  width: fit-content;
}
</style>