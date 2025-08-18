const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{

        mario.classList.remove('jump');

    }, 500);
}

let deaths = 0;
let distance = 0;
let gameOver = false;

const distanceDisplay = document.getElementById('distance');
const deathsDisplay = document.getElementById('deaths');

const loop = setInterval(()=>{

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

   if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './images/game-over.png';
    mario.style.width = '75px';
    mario.style.marginLeft = '50px';

    gameOver = true;
    deaths++;
    deathsDisplay.textContent = `Mortes: ${deaths}`;

    clearInterval(loop);
}


},10);

// Pular no PC (apenas com a tecla espaço)
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        jump();
    }
});

// Pular no celular (quando tocar na tela)
document.addEventListener('touchstart', () => {
    jump();
});

