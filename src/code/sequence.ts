import { ref } from 'vue';
import { script1 } from './script1';
import { ScriptRunner } from './runScript';
import { script2 } from './script2';

const seqIter = ref(0);
export const scriptRunning = ref(false);
export const shopRunning = ref(false);

const seq = [
    {
        type: 'script',
        value: script1
    },
    {
        type: 'shop'
    },
    {
        type: 'script',
        value: script2
    }
]

export const nextSeq = () => {
    if (scriptRunning.value) {
        const result = ScriptRunner.next();
        if (result) {
            return;
        } else {
            scriptRunning.value = false;
            seqIter.value++;
        }
    } else if (shopRunning.value) {
        shopRunning.value = false;
        seqIter.value++;
    }

    if (seqIter.value < seq.length) {
        const next = seq[seqIter.value];
        if (next.type === 'script' && next.value) {
            console.log('script');
            ScriptRunner.init(next.value);
            scriptRunning.value = true;

        } else if (next.type === 'shop') {
            console.log('shop');
            shopRunning.value = true;
        }
    }
}
