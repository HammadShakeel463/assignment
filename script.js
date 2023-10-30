document.getElementById('techFilter').addEventListener('input', filterProjects);

function filterProjects() {
    const filter = document.getElementById('techFilter').value.toLowerCase();
    const projectList = document.getElementById('projectList');
    const projects = projectList.getElementsByTagName('li');

    for (let project of projects) {
        const text = project.textContent.toLowerCase();
        if (text.includes(filter)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    }
}
