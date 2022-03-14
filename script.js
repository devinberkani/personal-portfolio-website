let about = document.getElementById('aboutId');
let projects = document.getElementById('projectsId');
let skills = document.getElementById('skillsId');
let contact = document.getElementById('contactId');

let aboutUnderline = () => {
    about.style.textDecoration = 'underline';
};

let noAboutUnderline = () => {
    about.style.textDecoration = '';
};

let projectsUnderline = () => {
    projects.style.textDecoration = 'underline';
};

let noProjectsUnderline = () => {
    projects.style.textDecoration = '';
};

let skillsUnderline = () => {
    skills.style.textDecoration = 'underline';
};

let noSkillsUnderline = () => {
    skills.style.textDecoration = '';
};

let contactUnderline = () => {
    contact.style.textDecoration = 'underline';
};

let noContactUnderline = () => {
    contact.style.textDecoration = '';
};


skills.style.textDecoration = 'underline';
contact.style.textDecoration = 'underline';

about.addEventListener('mouseover', aboutUnderline);
about.addEventListener('mouseout', noAboutUnderline);

projects.addEventListener('mouseover', projectsUnderline);
projects.addEventListener('mouseout', noProjectsUnderline);

skills.addEventListener('mouseover', skillsUnderline);
skills.addEventListener('mouseout', noSkillsUnderline);

contact.addEventListener('mouseover', contactUnderline);
contact.addEventListener('mouseout', noContactUnderline);