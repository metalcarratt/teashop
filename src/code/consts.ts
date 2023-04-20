import { Character } from "./types";

export const smile = './owner.png';
export const surprised = './owner-surprised.png';
export const lady = './herblady.png';
export const wookmaker = './woodmaker.png';

export const teashop = './teashop_outside_1.jpg';
export const herbStore = './herb_store.jpg';
export const furnitureStore = './furniture_shop.jpg';

export const player: Character = {
    normal: smile,
    surprised,
    height: '70%',
    left: '60px'
}

export const herbOwner: Character = {
    normal: lady,
    height: '80%',
    left: '60px'
}

export const furnitureOwner: Character = {
    normal: wookmaker,
    height: '70%',
    left: '40px'
}