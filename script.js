let musica = document.querySelector('audio');

let duracaoMusica = document.querySelector('.end');

duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

// Eventos
document.querySelector('.buttom-play').addEventListener('click', tocarMusica);

document.querySelector('.buttom-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', autalizarBarra);


// Funções
function tocarMusica(){
    musica.play();
    document.querySelector('.buttom-pause').style.display = 'block';
    document.querySelector('.buttom-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.buttom-pause').style.display = 'none';
    document.querySelector('.buttom-play').style.display = 'block';
}

function autalizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.start');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return  campoMinutos + ':' + campoSegundos;
}