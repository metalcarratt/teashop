<template>
    <div class="shop">
        <h2>Granny's Herbs</h2>
        <div class="wares">
            <span class="item" v-for="(item, index) in wares" :key="index">
                <img :src="item.image" />
                <label>{{ item.name }}</label>
            </span>
        </div>
    </div>
</template>

<script setup>
const wares = [{
    name: 'Black tea leaves',
    image: './blacktea.png'
}];
</script>

<style scoped>
.shop {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.shop h2 {
    color: white;
    text-shadow: 0px 0px 2px black;
    font-size: 30px;
    text-align: center;
    margin-top: 10px;
    border-top: 2px solid white;
    width: 70%;
    border-bottom: 2px solid white;
    background-color: #fff6;
}

.wares .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff2;
    padding: 8px;
    border-radius: 8px;
}

.wares .item img {
    width: 150px;
    filter: drop-shadow(0 0 10px #412523);
}

.wares .item label {
    color: white;
    text-shadow: 0px 0px 2px black;
}

.wares .item:hover img {
    filter: drop-shadow(0 0 10px #fabdb9);
}


</style>