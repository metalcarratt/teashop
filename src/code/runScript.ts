import { Ref, ref } from 'vue';
import { Script } from './types';

const dialogueIndex = ref(0);
let script: Script = [];

const at = ref('');
const say = ref('');
const who: Ref<Record<string, string>> = ref({});
const emo = ref('normal');

const process = () => {
    const scene = script[dialogueIndex.value];
    if (scene.at) {
        at.value = scene.at;
    }
    if (scene.say) {
        say.value = scene.say;
    }
    if (scene.who) {
        who.value = scene.who;
        emo.value = 'normal';
    }
    if (scene.emo) {
        emo.value = scene.emo;
    }
}

export const ScriptRunner = {
    character: () => who.value[emo.value],
    location: () => at.value,
    words: () => say.value,
    height: () => who.value.height,

    init(_script: Script) {
        script = _script;
        process();
    },

    next() {
        dialogueIndex.value++;
        if (dialogueIndex.value < script.length) {
            process();
            return true;
        }
        return false;
    }
}