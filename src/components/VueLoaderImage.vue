<script setup lang="ts">
import { defineProps, nextTick, onMounted, ref, useSlots } from 'vue'
import generateRandomId from '../utils/RandomID'

const dynamicId = ref({
    'containerCustomLoader': '',
    'img': '',
    'skeleton': ''
})

const slot = useSlots()
const showImage = ref(false)
const props = defineProps<{
    src: string
    width: string
    height: string
    delay?: string
    circle?: boolean
    pill?: string
    alt?: string
    crossorigin?: 'anonymous' | 'use-credentials' | ''
    loading?: 'eager' | 'lazy'
    longdesc?: string
}>()

function loadedImage() {
    if (props.delay) {
        setTimeout(() => {
            showImage.value = true
        }, parseInt(props.delay!));

        return
    }

    showImage.value = true
}

onMounted(async () => {
    dynamicId.value.containerCustomLoader = 'container-' + generateRandomId()
    dynamicId.value.img = 'container-' + generateRandomId()
    dynamicId.value.skeleton = 'container-' + generateRandomId()

    await nextTick()

    if (!slot.default) {
        const skeleton = document.getElementById(dynamicId.value.skeleton)

        skeleton!.classList.add('skeleton-loader')
        skeleton!.style.width = props.width
        skeleton!.style.height = props.height
        props.circle ? skeleton!.style.borderRadius = '100%' : skeleton!.style.borderRadius = props.pill!
    }

    const img = document.getElementById(dynamicId.value.img)
    const slot_container = document.getElementById(dynamicId.value.containerCustomLoader)

    img!.style.width = props.width
    img!.style.height = props.height

    if (slot_container) {
        slot_container!.style.width = props.width
        slot_container!.style.height = props.height
    }

    if (props.circle) {
        img!.style.borderRadius = '100%'
        return
    }

    if (props.pill) {
        img!.style.borderRadius = props.pill
    }
})
</script>

<template>
    <div class="fit image-loader">
        <div v-if="!showImage && $slots.default" class="flex center" :id="dynamicId.containerCustomLoader">
            <slot />
        </div>
        <div v-else-if="!showImage && !$slots.default" :id="dynamicId.skeleton" />
        <img :alt="props.alt" :crossorigin="props.crossorigin" :loading="props.loading" :longdesc="props.longdesc"
            style="object-fit: cover" :id="dynamicId.img" v-show="showImage" @load="loadedImage" :src="props.src" />
    </div>
</template>
<style>
.skeleton-loader {
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