
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const lose = document.querySelector('.title')

var score = 1;

const jump = () => {
     
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);

    var placar = score++; 
    document.getElementById("points").innerHTML = placar;
    document.getElementById("placarFinal").innerHTML = placar;
 }

document.addEventListener('keydown', jump);


const loop = setInterval(()=> {

    const pipePosition = pipe.offsetLeft;
    const cloudsPosition = clouds.offsetLeft;
    const cloudsPosition2 = clouds2.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`

        clouds2.style.animation = 'none';
        clouds2.style.left = `${cloudsPosition2}px`

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/marioDying.webp';
        mario.style.width= '75px';
        mario.style.marginLeft= '50px';

        lose.style.display= 'flex'

        clearInterval(loop);
    }

}, 10);

