<template>
    <div class="shop">
        <h2>Granny's Herbs</h2>
        <div class="wares">
            <span class="item" v-for="(item, index) in wares" :key="index">
                <img :src="item.image" />
                <label>{{ item.name }}: {{  item.cost }}c</label>
                <div class="buy">
                    <a href="#" @click.prevent="returnItem(item)">-</a>
                    <span class="quantity">{{ item.quantity }}</span>
                    <a href="#" @click.prevent="takeItem(item)">+</a>
                </div>
            </span>
        </div>
        <div class="total">
            <span>
                Total: {{ printTotal() }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const wares = ref([{
    name: 'Black tea leaves',
    image: './blacktea.png',
    cost: 50,
    quantity: 0
}]);

const total = ref(0);

const takeItem = (item) => {
    item.quantity++;
    total.value += item.cost;
}

const returnItem = (item) => {
    item.quantity--;
    total.value -= item.cost;
}

const printTotal = () => {
    let text = '';

    const dollars = parseInt(total.value / 100);
    const cents = total.value % 100;

    if (dollars > 0) {
        text += `$${dollars}`;
        if (cents > 9) {
            text += `.${cents}`;
        } else {
            text += `.0${cents}`;
        }
    } else {
        text += `${cents}c`;
    }
    
    return text;
}
</script>

<style scoped>
.shop {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
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

.wares .item .buy a {
    color: yellow;
    font-size: 50px;
    text-decoration: none;
    text-shadow: 0px 0px 1px black;
    padding-left: 16px;
    padding-right: 16px;
}

.wares .item .buy a:hover {
    text-shadow: 0px 0px 5px white;
}

.wares .item .buy .quantity {
    font-size: 40px;
    color: white;
    text-shadow: 0px 0px 1px black;
}

.total {
    margin-top: auto;
    color: white;
    font-size: 40px;
    text-shadow: 0px 0px 1px black;
    align-self: flex-end;
    border-top: 5px solid yellow;
    border-bottom: 15px double yellow;
    padding-left: 16px;
    padding-right: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
}
</style>