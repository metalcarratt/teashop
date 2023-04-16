<template>
    <TeaCanvas
        :location="ScriptRunner.location()"
        @click="click"
    >
        <TalkingView
            :character="ScriptRunner.character()"
            :words="ScriptRunner.words()"
            :height="ScriptRunner.height()"
            v-if="scriptRunning"
        />

        <ShopView v-else-if="shopRunning" />
    </TeaCanvas>
</template>

<script setup>
import { ref } from 'vue';
import TeaCanvas from './components/TeaCanvas.vue';
import TalkingView from './components/TalkingView.vue';
import ShopView from './components/ShopView.vue';
import { script1 } from './code/script1';
import { ScriptRunner } from './code/runScript';

const click = () => {
    if (scriptRunning.value) {
        const result = ScriptRunner.next();
        if (result) {
            return;
        } else {
            scriptRunning.value = false;
            seqIter.value++;
        }
    }

    if (seqIter.value < seq.length) {
        const next = seq[seqIter.value];
        if (next.type === 'script') {
            ScriptRunner.init(next.value);
            scriptRunning.value = true;

        } else if (next.type === 'shop') {
            console.log('shop');
            shopRunning.value = true;
        }
    }
    
}

const seqIter = ref(0);
const scriptRunning = ref(false);
const shopRunning = ref(false);

const seq = [
    {
        type: 'script',
        value: script1
    },
    {
        type: 'shop'
    }
]

click();
</script>