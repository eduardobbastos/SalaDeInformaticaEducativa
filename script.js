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
    },
    {
        id: 'mgame',
        title: 'Busca Palavras',
        path: 'projetos_jclic/projetos_para_editar/mgame/index.html',
        image: 'projetos_jclic/projetos_para_editar/mgame/project-cover.jpg',
        description: 'Para apoiar alunos com dificuldade de leitura e escrita.'
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

// --- Particles & Custom Cursor Logic ---

function initParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particlesArray = [];
    const numberOfParticles = 60; // Menos partículas para não poluir, mas maiores

    // Mouse interaction
    const mouse = {
        x: null,
        y: null,
        radius: 100 // interaction radius
    };

    // Adapt to window resize
    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        init();
    });

    // Track mouse position relative to canvas
    window.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    // Reset mouse when leaving canvas/window
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color; // Usa a cor aleatória
            ctx.fill();
        }

        update() {
            // Check boundaries
            if (this.x > canvas.width || this.x < 0) {
                this.directionX = -this.directionX;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.directionY = -this.directionY;
            }

            // Mouse Repulsion / Interaction
            // Check collision detection - mouse position / particle position
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
                        this.x += 2;
                    }
                    if (mouse.x > this.x && this.x > this.size * 10) {
                        this.x -= 2;
                    }
                    if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
                        this.y += 2;
                    }
                    if (mouse.y > this.y && this.y > this.size * 10) {
                        this.y -= 2;
                    }
                }
            }

            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        // Cores vibrantes das partículas
        const colors = ['rgba(255,255,255,0.8)', 'rgba(255, 230, 109, 0.8)', 'rgba(78, 205, 196, 0.8)'];

        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 8) + 2; // Partículas maiores (2 a 10px)
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1.5) - 0.75;
            let directionY = (Math.random() * 1.5) - 0.75;
            // Escolhe cor aleatória
            let color = colors[Math.floor(Math.random() * colors.length)];

            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }

        // Connect particles
        connect();
    }

    function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                    ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));

                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 10000);
                    ctx.strokeStyle = 'rgba(255, 255, 255,' + opacityValue + ')';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    init();
    animate();
}

function initCustomCursor() {
    const cursorDot = document.createElement('div');
    const cursorOutline = document.createElement('div');

    cursorDot.className = 'cursor-dot';
    cursorOutline.className = 'cursor-outline';

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorOutline);

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows instantly
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with slight delay handling via animate to be smooth or CSS transition
        // Using CSS variable or direct JS
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    initParticles();
    // Only init custom cursor if not mobile
    if (window.matchMedia("(min-width: 768px)").matches) {
        initCustomCursor();
    }
});
