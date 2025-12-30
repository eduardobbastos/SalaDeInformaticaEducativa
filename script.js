const projects = [
    {
        id: 'EMM001',
        title: 'Escola Municipal Montese - Atividade 1',
        path: 'projetos_jclic/projetos_deploy/EMM001/index.html',
        image: 'projetos_jclic/projetos_deploy/EMM001/project-cover.jpg',
        description: 'Atividade interativa educacional.'
    },
    {
        id: 'EMM002',
        title: 'Escola Municipal Montese - Atividade 2',
        path: 'projetos_jclic/projetos_deploy/EMM002/index.html',
        image: 'projetos_jclic/projetos_deploy/EMM002/project-cover.jpg',
        description: 'Atividade interativa educacional.'
    },
    {
        id: 'EMM003',
        title: 'Escola Municipal Montese - Atividade 3',
        path: 'projetos_jclic/projetos_deploy/EMM003/index.html',
        image: 'projetos_jclic/projetos_deploy/EMM003/project-cover.jpg',
        description: 'Atividade interativa educacional.'
    },
    {
        id: 'animais',
        title: 'Projeto Animais',
        path: 'projetos_jclic/projetos_deploy/animais/index.html',
        image: 'projetos_jclic/projetos_deploy/animais/project-cover.jpg',
        description: 'Conhecendo os animais de forma divertida.'
    },
    {
        id: 'direitoshumanos',
        title: 'Direitos Humanos',
        path: 'projetos_jclic/projetos_deploy/direitoshumanos/index.html',
        image: 'projetos_jclic/projetos_deploy/direitoshumanos/project-cover.jpg',
        description: 'Atividades sobre cidadania e direitos.'
    },
    {
        id: 'escola',
        title: 'Projeto Escola',
        path: 'projetos_jclic/projetos_deploy/escola/index.html',
        image: 'projetos_jclic/projetos_deploy/escola/project-cover.jpg',
        description: 'Atividades relacionadas ao ambiente escolar.'
    },
    {
        id: 'flc',
        title: 'Folclore',
        path: 'projetos_jclic/projetos_deploy/flc/index.html',
        image: 'projetos_jclic/projetos_deploy/flc/project-cover.jpg',
        description: 'Projeto educacional FLC.'
    },
    {
        id: 'flc_2018_a',
        title: 'Folclore 2018 - Atividade A',
        path: 'projetos_jclic/projetos_deploy/flc_2018_a/index.html',
        image: 'projetos_jclic/projetos_deploy/flc_2018_a/project-cover.jpg',
        description: 'Edição 2018 A do projeto FLC.'
    },
    {
        id: 'flc_2018_a1',
        title: 'Folclore 2018 - Atividade A1',
        path: 'projetos_jclic/projetos_deploy/flc_2018_a1/index.html',
        image: 'projetos_jclic/projetos_deploy/flc_2018_a1/project-cover.jpg',
        description: 'Continuação do projeto FLC 2018.'
    },
    {
        id: 'mat2a',
        title: 'Matemática - Atividade 2A',
        path: 'projetos_jclic/projetos_deploy/mat2a/index.html',
        image: 'projetos_jclic/projetos_deploy/mat2a/project-cover.jpg',
        description: 'Exercícios de matemática nível 2A.'
    },
    {
        id: 'mat2b',
        title: 'Matemática - Atividade 2B',
        path: 'projetos_jclic/projetos_deploy/mat2b/index.html',
        image: 'projetos_jclic/projetos_deploy/mat2b/project-cover.jpg',
        description: 'Exercícios de matemática nível 2B.'
    },
    {
        id: 'monica',
        title: 'Turma da Mônica',
        path: 'projetos_jclic/projetos_deploy/monica/index.html',
        image: 'projetos_jclic/projetos_deploy/monica/project-cover.jpg',
        description: 'Aprenda brincando com a Turma da Mônica.'
    },
    {
        id: 'projects',
        title: 'Outros Projetos',
        path: 'projetos_jclic/projetos_deploy/projects/index.html',
        image: 'projetos_jclic/projetos_deploy/projects/project-cover.jpg',
        description: 'Coletânea de projetos diversos.'
    }
];

const projectsGrid = document.getElementById('projects-grid');

function renderProjects() {
    projectsGrid.innerHTML = '';

    projects.forEach(project => {
        const card = document.createElement('a');
        card.className = 'project-card';
        card.href = project.path;
        card.target = '_blank'; // Opens in new tab

        // Check if image loads could be complex without backend, so we default to img tag
        // If it breaks, we could add an onError handler inline

        const imageHTML = `
            <img src="${project.image}" 
                 alt="${project.title}" 
                 class="card-image"
                 onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'card-image-placeholder\'>${project.title.substring(0, 2).toUpperCase()}</div>'">
        `;

        card.innerHTML = `
            ${imageHTML}
            <div class="card-body">
                <h3 class="card-title">${project.title}</h3>
                <p class="card-description">${project.description}</p>
                <div class="card-cta">
                    Acessar Atividade 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
            </div>
        `;

        projectsGrid.appendChild(card);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', renderProjects);
