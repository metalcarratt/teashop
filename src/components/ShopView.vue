<template>
    <div class="shop">
        <h2>Granny's Herbs</h2>
        <div class="purse">Purse: {{ printMoney(purse) }}</div>
        <div class="wares">
            <span class="item" v-for="(item, index) in wares" :key="index">
                <img :src="item.image" />
                <label>{{ item.name }}: {{  item.cost }}c</label>
                <div class="cart">
                    <a href="#" @click.prevent="returnItem(item)">-</a>
                    <span class="quantity">{{ item.quantity }}</span>
                    <a href="#" @click.prevent="takeItem(item)">+</a>
                </div>
            </span>
        </div>
        <div class="bottom-section">
            
            <div class="total">
                <span :class="notEnoughMoney() ? 'overdraft' : ''">
                    Total: {{ printMoney(total) }}
                </span>
            </div>
            <div>
                <span class="warning" v-if="warning">
                    <img :src="profile()" /> {{ warning }} <span class="blinking">▶</span>
                </span>
                <button class="buy" @click="buy">Buy It!</button>
            </div>
            
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const purse = ref(1000);

const wares = ref([{
    name: 'Black tea leaves',
    image: './blacktea.png',
    cost: 50,
    quantity: 0
}]);

const total = ref(0);

const warning = ref('');

const takeItem = (item) => {
    item.quantity++;
    total.value += item.cost;
}

const returnItem = (item) => {
    if (item.quantity > 0) {
        item.quantity--;
        total.value -= item.cost;
    }
}

const notEnoughMoney = () => total.value > purse.value;

const printMoney = (money) => {
    let text = '';

    const dollars = parseInt(money / 100);
    const cents = money % 100;

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

const buy = () => {
    if (wares.value.find(item => item.name === 'Black tea leaves').quantity !== 4) {
        warning.value = "Let's buy four 'Black tea leaves'!";
    }
}

const profile = () => './profile-warning.png';
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

.wares .item .cart a {
    color: yellow;
    font-size: 50px;
    text-decoration: none;
    text-shadow: 0px 0px 1px black;
    padding-left: 16px;
    padding-right: 16px;
}

.wares .item .cart a:hover {
    text-shadow: 0px 0px 5px white;
}

.wares .item .cart .quantity {
    font-size: 40px;
    color: white;
    text-shadow: 0px 0px 1px black;
}

.bottom-section {
    margin-top: auto;
    align-self: flex-end;
    margin-right: 8px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.warning {
    display: inline-block;
    align-self: flex-end;
    background-color: #fffdf4;
    padding: 4px 8px;
    border: 1px solid black;
    border-radius: 8px;
    margin-right: 16px;
    vertical-align: bottom;
}

.warning img {
    width: 40px;
    border: 1px solid black;
    border-radius: 25px;
    vertical-align: middle;
    margin-right: 8px;
}

.total {
    color: white;
    font-size: 40px;
    text-shadow: 0px 0px 1px black;
    border-top: 5px solid yellow;
    border-bottom: 15px double yellow;
    padding-left: 16px;
    padding-right: 8px;
    margin-bottom: 8px;
}

.total .overdraft {
    color: #e54c4c;
}

.purse {
    align-self: flex-end;
    margin-right: 8px;
    font-size: 40px;
    color: white;
    text-shadow: 0px 0px 1px black;
}

.buy {
    font-family: 'Itim', cursive;
    font-size: 30px;
    padding: 4px;
    width: 200px;
    margin-top: 12px;
    background-color: yellow;
    border: 1px solid yellow;
    filter: drop-shadow(0 0 2px black);
    color: #3e3e04;
}

.buy:hover {
    cursor: pointer;
    filter: drop-shadow(0 0 4px white);
}

.blinking {
    animation: blinker 1.5s linear infinite;
    margin-left: 8px;
    color: #777741;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>