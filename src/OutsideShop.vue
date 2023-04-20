<template>
    <TeaCanvas
        :location="ScriptRunner.location()"
    >
        <TalkingView
            :character="ScriptRunner.character()"
            :words="ScriptRunner.words()"
            :emo="ScriptRunner.emo()"
            v-if="scriptRunning"
            @click="click"
        />

        <ShopView v-else-if="shopRunning"
            @finished="nextSeq"/>
    </TeaCanvas>
</template>

<script setup>
import TeaCanvas from './components/TeaCanvas.vue';
import TalkingView from './components/TalkingView.vue';
import ShopView from './components/ShopView.vue';
import { ScriptRunner } from './code/runScript';
import { nextSeq, scriptRunning, shopRunning } from './code/sequence';

const click = () => nextSeq();

nextSeq();
</script>