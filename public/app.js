"use strict";
const form = document.getElementById('myForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const address = document.getElementById('address').value;
    const age = document.getElementById('age').value;
    const married = document.getElementById('married').value;
    const skill = document.getElementById('skill').value;
    document.getElementById('outputName').textContent = `Hi👋, my name is: ${name}`;
    document.getElementById('outputSurname').textContent = ` and my surname is: ${surname}`;
    document.getElementById('outputAddress').textContent = `I live in: ${address}`;
    document.getElementById('outputAge').textContent = `I'm ${age} years old`;
    document.getElementById('outputMarried').textContent = `I'm : ${married}`;
    document.getElementById('outputSkill').textContent = `I'm good at: ${skill}`;
});
