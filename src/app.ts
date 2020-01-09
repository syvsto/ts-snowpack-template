import { h, render } from 'preact';

const app = h('div', null, "Hello dude!");
const root = document.getElementById('app');
if (root) render(app, root);
