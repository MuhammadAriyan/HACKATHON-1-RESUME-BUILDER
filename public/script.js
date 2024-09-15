"use strict";
const skills = document.getElementById('skills');
const skillButton = document.getElementById('btnS');
const expform = document.getElementById('expform');
const addexp = document.getElementById('addexp');
const addskills = document.getElementById('addskills');
const skillform = document.getElementById('skillform');
const formInEdu = document.getElementById('formInEdu');
const addedu = document.getElementById('addedu');
if (skillButton) {
    skillButton.addEventListener('click', () => {
        skills.classList.toggle("hidden");
        if (skills.classList.contains('hidden')) {
            skillButton.textContent = 'SHOW SKILLS';
        }
        else {
            skillButton.textContent = 'HIDE SKILLS';
        }
    });
}
else {
    console.error('something bad happened!');
}
if (addexp) {
    addexp.addEventListener('click', () => {
        if (expform) {
            const expform2 = expform.cloneNode(true);
            expform.appendChild(expform2);
        }
    });
}
if (addedu) {
    addedu.addEventListener('click', () => {
        if (formInEdu) {
            const formInEdu2 = formInEdu.cloneNode(true);
            formInEdu.appendChild(formInEdu2);
        }
    });
}
if (addskills) {
    addskills.addEventListener('click', () => {
        if (skillform) {
            const skillform2 = skillform.cloneNode(true);
            skillform.appendChild(skillform2);
        }
    });
}
