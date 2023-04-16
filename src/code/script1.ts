import { herbOwner, herbStore, player, teashop } from "./consts";
import { Script } from "./types";

export const script1: Script = [
    {
        at: teashop,
        say: "Wow!",
        who: player,
    },
    {
        say: "My very own teashop!",
    },
    {
        say: "I've always wanted to own a teashop.",
    },
    {
        say: "I wonder what tea it has inside?",
    },
    {
        say: "??",
        emo: 'surprised'
    },
    {
        say: "There's no tea?!?",
    },
    {
        say: "Looks like I'll have to buy some. Let's go to the market!",
        emo: 'normal'
    },
    {
        at: herbStore,
        say: "Here we are.",
    },
    {
        say: "Hello, dear.",
        who: herbOwner
    },
    {
        who: player,
        say: "Hi, Granny. I need to buy some tea. Do you have any?"
    },
    {
        who: herbOwner,
        say: "Well dear, why don't you take a look at what I've got and let me know if it's what you want?"
    },
    {
        who: player,
        say: "Okay!"
    }
]