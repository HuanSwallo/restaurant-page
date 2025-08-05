import "./styles.css";

import createHomePage from './home';
import createMenu from './menu';
import createContact from './contact';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

function clearTabHighlight() {
    homeBtn.classList.remove('active');
    menuBtn.classList.remove('active');
    contactBtn.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    clearTabHighlight();
    homeBtn.classList.add('active');
    createHomePage();
});

homeBtn.addEventListener('click', () => {
    clearTabHighlight();
    homeBtn.classList.add('active');
    createHomePage();
});

menuBtn.addEventListener('click', () => {
    clearTabHighlight();
    menuBtn.classList.add('active');
    createMenu();
});

contactBtn.addEventListener('click', () => {
    clearTabHighlight();
    contactBtn.classList.add('active');
    createContact();
});
