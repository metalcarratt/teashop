import { Ref, ref } from 'vue';

const purse = ref(1000);

const storage: Ref<Record<string, number>> = ref({});

export const inventory = {
    purse: () => purse.value,
    spend: (amount: number) => purse.value -= amount,
    addItems: (items: Record<string, number>) => {
        for (const item of Object.keys(items)) {
            if (storage.value[item]) {
                storage.value[item] += items[item];
            } else {
                storage.value[item] = items[item];
            }
        }
    }
}