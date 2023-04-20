import { furnitureOwner, furnitureStore, herbOwner, herbStore, player, wookmaker } from "./consts";
import { Script } from "./types";

export const script2: Script = [
    {
        at: herbStore,
        say: "Did you get what you were looking for?",
        who: herbOwner
    },
    {
        who: player,
        say: "Yes, thank you Granny!"
    },
    {
        who: herbOwner,
        say: "No problem. Come back anytime."
    },
    {
        who: player,
        say: "Okay, what else do we need?"
    },
    {
        say: "Hmm. How about a pretty cabinet to store the tea?"
    },
    {
        say: "Let's go!"
    },
    {
        at: furnitureStore,
        say: "Here we are!"
    },
    {
        who: furnitureOwner,
        say: "Hello, dear."
    },
    {
        who: player,
        say: "Hi Grandpa!"
    },
    {
        who: furnitureOwner,
        say: "How can I help you today?"
    },
    {
        who: player,
        say: "I'd like to buy a storage cabinet for a shop."
    },
    {
        who: furnitureOwner,
        say: "Certainly. Choose the one you like. They're all very good quality."
    }
];