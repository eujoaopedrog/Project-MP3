let musicas = [
    { titulo: 'Casinha (Ao Vivo)', artista: 'Armandinho', src: 'music/Armandinho - Casinha (Ao Vivo).mp3', img: 'img/armandinho.jpg' },
    { titulo: 'Seu Astral', artista: 'Jorge e Matheus', src: 'music/Jorge, Mateus - Seu Astral_fANtA8K3ugM.mp3', img: 'img/jorge e matheus.jpg' },
    { titulo: 'Fly Me To The Moon', artista: 'Frank Sinatra', src: 'music/Fly Me To The Moon (2008 Remastered)_ZEcqHA7dbwM.mp3', img: 'img/franksinatra.webp' }

];

let musica = document.querySelector('audio');

let indexMusica = 0;

let duracaoMusica = document.querySelector('.end');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.description h2');
let nomeArtista = document.querySelector('.description i');

renderizarMusica(indexMusica);

// Eventos
document.querySelector('.buttom-play').addEventListener('click', tocarMusica);

document.querySelector('.buttom-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', autalizarBarra);

musica.addEventListener('loadeddata', duration);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.buttom-pause').style.display = 'block';
    document.querySelector('.buttom-play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.buttom-pause').style.display = 'none';
    document.querySelector('.buttom-play').style.display = 'block';
}

function autalizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.start');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}

function duration() {
    let duracaoMusica = document.querySelector('.end');
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
}

