import {
    getData
} from './modules/getData';
import {
    filter
} from './modules/filter';
import {
    renderSwitcher
} from './modules/renderSwitcher';
import {
    cardsList
} from './modules/cardsList';
import {
    scroll
} from './modules/scroll';
import {
    svg
} from './modules/svg';
import {
    music
} from './modules/music';


const heroes = document.querySelector('.heroes');
const switcher = document.querySelector('.switcher');

getData('dbHeroes.json').then(data => {
    const cardsLists = new cardsList(heroes, data);
    renderSwitcher(switcher, data);
    cardsLists.render();
    filter();
});
scroll();
svg();
music();