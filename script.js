function abrirCarta() {
  const carta = document.getElementById('carta');
  carta.classList.toggle('opened');
}

const audio = document.getElementById('audioFondo');
const btnAudio = document.getElementById('btnAudio');
let isPlaying = true;

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    btnAudio.textContent = '▶️ Reanudar música';
  } else {
    audio.play().catch((error) => {
      console.error('Error al reproducir el audio:', error);
    });
    btnAudio.textContent = '⏸️ Pausar música';
  }
  isPlaying = !isPlaying;
}

// Ensure audio plays on page load if supported
document.addEventListener('DOMContentLoaded', () => {
  audio.play().catch((error) => {
    console.error('Error al iniciar el audio:', error);
  });
});