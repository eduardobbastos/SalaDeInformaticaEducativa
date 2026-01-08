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

// --- Game Logic ---

const gameBoard = document.getElementById('game-board');
const playerAvatar = document.getElementById('player');
const diceElement = document.getElementById('dice');
const rollBtn = document.getElementById('roll-btn');
const gameStatus = document.getElementById('game-status');
const modal = document.getElementById('activity-modal');
const closeModal = document.querySelector('.close-modal');

// Modal Elements
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

let currentPosition = 0; // Index in projects array
let isMoving = false;

// Initialize Board
function initBoard() {
    if (!gameBoard) return; // Guard clause
    gameBoard.innerHTML = '';

    // Create Steps
    projects.forEach((project, index) => {
        const step = document.createElement('div');
        step.className = 'board-step';
        step.id = `step-${index}`;

        // Number badge
        const badge = document.createElement('div');
        badge.className = 'board-step-number';
        badge.innerText = index + 1;
        step.appendChild(badge);

        // Icon based on title (Reusing logic)
        const iconDiv = document.createElement('div');
        iconDiv.className = 'step-icon';
        iconDiv.innerHTML = getIconForProject(project.title);
        step.appendChild(iconDiv);

        // Click to jump (Cheat mode / Accessibility)
        step.addEventListener('click', () => {
            if (!isMoving) {
                moveToStep(index);
                showModal(index);
            }
        });

        gameBoard.appendChild(step);
    });

    // Place player at start
    setTimeout(() => {
        placePlayerAt(0);
    }, 100);
}

function getIconForProject(title) {
    const t = title.toLowerCase();
    const commonProps = 'width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

    if (t.includes('matemática') || t.includes('mat')) return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>`;
    if (t.includes('animais') || t.includes('bicho')) return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21S3 17.9 3 13.44c0-1.2.43-2.37 1-3.44 0 0-1.82-6.42-.42-7 1.39-.58 4.64.26 6.42 2.26 .65-.17 1.33-.26 2-.26z"/></svg>`;
    if (t.includes('folclore')) return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`;
    if (t.includes('escola')) return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M8 21v-4a4 4 0 0 1 4-4v0a4 4 0 0 1 4 4v4"/></svg>`;
    if (t.includes('mônica')) return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>`;

    return `<svg xmlns="http://www.w3.org/2000/svg" ${commonProps}><path d="M19.439 15.424a1 1 0 0 1-1.432-1.408 3.003 3.003 0 0 0 1.993-2.584c0-1.657-1.343-3-3-3s-3 1.343-3 3a1 1 0 0 1-2 0c0-1.657-1.343-3-3-3s-3 1.343-3 3a1 1 0 0 1-2 0c0 1.657 1.343 3 3 3s3-1.343 3-3a1 1 0 0 1 2 0c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.157-.648-2.176-1.626-2.705a1 1 0 0 1-.374-1.3z"/></svg>`;
}

function placePlayerAt(index) {
    const step = document.getElementById(`step-${index}`);
    if (!step || !playerAvatar) return;

    // Get position relative to container
    const rect = step.getBoundingClientRect();
    const container = document.getElementById('game-board-container');
    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    // Center the avatar on the node.
    const stepRect = step.getBoundingClientRect();

    // Calculate position relative to the container
    const left = stepRect.left - containerRect.left + (stepRect.width / 2) - (playerAvatar.offsetWidth / 2);
    const top = stepRect.top - containerRect.top + (stepRect.height / 2) - (playerAvatar.offsetHeight / 2);
    // Actually, game-board is normal flow. game-board-container is relative.
    // So player is relative to game-board-container.
    // We strictly need step's position relative to container.
    // Since game-board is child of container and has no position:relative, 
    // step.offsetLeft might be relative to container if container is the nearest positioned ancestor.
    // Let's rely on that.

    playerAvatar.style.transform = `translate(${left}px, ${top}px)`;

    // Highlight active node
    document.querySelectorAll('.board-step').forEach(s => s.classList.remove('active-node'));
    step.classList.add('active-node');
}

function moveToStep(targetIndex) {
    currentPosition = targetIndex;
    placePlayerAt(currentPosition);
}

async function movePlayerSteps(steps) {
    isMoving = true;
    gameStatus.innerText = "Andando...";
    rollBtn.disabled = true;

    for (let i = 0; i < steps; i++) {
        currentPosition++;
        // Loop back to start if exceeds
        if (currentPosition >= projects.length) {
            currentPosition = 0;
            // Optional: victory condition
        }

        placePlayerAt(currentPosition);
        // Wait for animation
        await new Promise(r => setTimeout(r, 600));
    }

    isMoving = false;
    rollBtn.disabled = false;
    gameStatus.innerText = "Chegou!";

    // Open Modal
    showModal(currentPosition);
}

// Dice Logic
function rollDice() {
    if (isMoving) return;

    const result = Math.floor(Math.random() * 6) + 1;

    // Animate Dice
    // Random rotations
    const xRand = Math.floor(Math.random() * 24 + 1) * 90; // Multiples of 90
    const yRand = Math.floor(Math.random() * 24 + 1) * 90;

    // Explicit rotation for the face logic needs care, but for visual effect random is fine
    // We want to land on the correct face visually, but for now let's just spin wildy
    // and then output the number.

    diceElement.style.transform = `rotateX(${xRand}deg) rotateY(${yRand}deg)`;

    gameStatus.innerText = "Rolando...";
    rollBtn.disabled = true;

    setTimeout(() => {
        gameStatus.innerText = `Você tirou ${result}!`;
        // Move player
        movePlayerSteps(result);
    }, 1200);
}

if (rollBtn) {
    rollBtn.addEventListener('click', rollDice);
}

// Modal Logic
function showModal(index) {
    const project = projects[index];
    modalImage.src = project.image;
    modalTitle.innerText = project.title;
    modalDescription.innerText = project.description;
    modalLink.href = project.path;

    modal.classList.add('show');
}

if (closeModal) {
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        gameStatus.innerText = "Sua vez!";
    });
}

window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('show');
        gameStatus.innerText = "Sua vez!";
    }
});


// Window Resize Handling
window.addEventListener('resize', () => {
    // Recalculate player position
    placePlayerAt(currentPosition);
});


// --- Particles (Keep existing particle logic) ---
function initParticles() {
    const canvas = document.getElementById('hero-particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let particlesArray = [];
    const numberOfParticles = 60;

    // Mouse interaction
    const mouse = { x: null, y: null, radius: 100 };

    window.addEventListener('resize', () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        initParticleSystem();
    });

    window.addEventListener('mousemove', (event) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = event.clientX - rect.left;
        mouse.y = event.clientY - rect.top;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x; this.y = y;
            this.directionX = directionX; this.directionY = directionY;
            this.size = size; this.color = color;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius + this.size) {
                    if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
                    if (mouse.x > this.x && this.x > 10) this.x -= 2;
                    if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
                    if (mouse.y > this.y && this.y > 10) this.y -= 2;
                }
            }
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function initParticleSystem() {
        particlesArray = [];
        const colors = ['rgba(255,255,255,0.8)', 'rgba(255, 230, 109, 0.8)', 'rgba(78, 205, 196, 0.8)'];
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 8) + 2;
            let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * 1.5) - 0.75;
            let directionY = (Math.random() * 1.5) - 0.75;
            let color = colors[Math.floor(Math.random() * colors.length)];
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animateParticles() {
        requestAnimationFrame(animateParticles);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }

        // Connect
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

    initParticleSystem();
    animateParticles();
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
    initBoard();
    initParticles();
    // Only init custom cursor if not mobile
    if (window.matchMedia("(min-width: 768px)").matches) {
        initCustomCursor();
    }
});
