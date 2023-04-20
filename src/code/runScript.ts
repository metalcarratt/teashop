import { Ref, ref } from 'vue';
import { Character, Script } from './types';

const dialogueIndex = ref(0);
let script: Script = [];

const at = ref('');
const say = ref('');
const who: Ref<Character | null> = ref(null);
const emo = ref('normal');

const process = () => {
    // console.log(`dialogueIndex: ${dialogueIndex.value}`);
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
    character: () => who.value,
    emo: () => emo.value,
    location: () => at.value,
    words: () => say.value,

    init(_script: Script) {
        script = _script;
        dialogueIndex.value = 0;
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