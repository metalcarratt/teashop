<template>
    <span>
        <span class="talking">
            “{{ props.words }}” 
            <span class="blinking">◀</span>
        </span>
        <img class="character" :style="`height: ${props.character.height}; left: ${props.character.left}`" :src="character()" />
    </span>
</template>

<script setup>
import { defineProps } from 'vue';
import { Character as CT } from '@/code/types';

const props = defineProps({
    'character': CT,
    'words': String,
    'emo': String
});

const character = () => props.character[props.emo];
</script>

<style scoped>
img.character {
    position: absolute;
    bottom: 0;
    height: 90%;
    left: 60px;
    filter: drop-shadow(0 0 100px #bd88b2);
}

.talking {
    position: absolute;
    width: calc(100% - 40px);
    z-index: 10;
    margin: 20px;
    background-color: white;
    box-sizing: border-box;
    padding: 15px;
    font-size: 22px;
    border: 4px double #8c4b4b;
    color: #8c4b4b;
    background-color: #f2e8e8;
    display: block;
}

@media only screen and (max-width: 462px) {
    /* img.character {
        width: 100%;
    } */
}

.blinking {
    font-size: 14px;
    float: right;
    animation: blinker 1.5s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>