<template>
    <OutsideShop />
</template>

<script setup>
import { onMounted } from 'vue';
import OutsideShop from './OutsideShop.vue';

onMounted(() => {
  this.$imagePreload([
    './owner.png',
    './owner-surprised.png',
    './herblady.png',
    './teashop_outside_1.jpg',
    './herb_store.jpg'
  ]);
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: #fadafa;
  font-family: 'Itim', cursive;
}

#app {
  display: flex;
  justify-content: center;
}
</style>
