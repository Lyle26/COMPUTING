function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

function showSection(sectionId) {
    document.querySelectorAll('.content').forEach(section => section.style.display = 'none');
    document.getElementById('welcome').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

showSection('welcome');
