<template>
    <div class="container" @click="click">
        <h1>❀ Little Tea Shop ❀</h1>
        <div class="inner">
            <img class="location" :src="location()" />
            <div class="overlay">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['location']);
const emit = defineEmits(['click']);

const click = () => emit('click');

const location = () => props.location;

</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap');

img.location {
    height: 600px;
}

.container {
    height: 647px;
    border: 4px double #730273;
    /* position: relative; */
}

.container:hover {
    cursor: pointer;
}

.container h1 {
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    margin: 0;
    text-align: center;
    color: #9926b9;
    background-color: #c3ffc3;
    text-shadow: 1px 1px #ddb0ea;
    border-bottom: 4px double #730273;
}

.inner {
    position: relative;
}

.overlay {
    position: absolute;
    top: 0;
    height: 600px;
    width: 100%;
}
</style>