import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';

let szinek = [
    'white',
    'red',
    'orange',
    'yellow',
    'green',
    'cyan',
    'blue',
    'purple',
];

let aktualisSzin = 0;

function szinvaltas() {
    aktualisSzin = aktualisSzin + 1;
    if (aktualisSzin >= szinek.length ) {
        aktualisSzin = 0;
    }
    document.body.style.backgroundColor = szinek[aktualisSzin];
}

function init() {
    document.getElementById('szinvalto').addEventListener('click',szinvaltas);
}

document.addEventListener('DOMContentLoaded',init);

console.log('Loaded');