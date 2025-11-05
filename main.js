const card = document.getElementById('card');
const cancel = document.getElementById('cancelBtn');

function centerOnce() {
  card.style.left = '50%';
  card.style.top = '50%';
  card.style.transform = 'translate(-50%, -50%)';
}

function jumpCard() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const rect = card.getBoundingClientRect();
  const pad = 16;
  
  // Calculate random position ensuring the box stays fully visible
  const maxX = vw - rect.width - pad;
  const maxY = vh - rect.height - pad;
  
  const x = Math.floor(Math.random() * (maxX - pad)) + pad;
  const y = Math.floor(Math.random() * (maxY - pad)) + pad;
  
  // Set absolute position
  card.style.left = x + 'px';
  card.style.top = y + 'px';
  card.style.transform = 'translate(0, 0)';
}

cancel.addEventListener('click', (e) => {
  e.preventDefault();
  jumpCard();
});

window.addEventListener('resize', centerOnce);