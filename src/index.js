import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

let szinek = [
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
];

function szinvaltas() {
    console.log('katt');
}

function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvaltas);
}

document.addEventListener('DOMContentLoaded',init);

console.log('Loaded');