const shareButtons = document.querySelectorAll('.tile-share-button');

const copiedBox = document.createElement('div');
copiedBox.className = 'copied-toast';
copiedBox.textContent = 'copied!';
document.body.appendChild(copiedBox);

async function copyText(e) {
  e.preventDefault();

  const link = this.dataset.link;

  if (!navigator.clipboard) {
    alert("Clipboard not supported in this browser.");
    return;
  }

  try {
    await navigator.clipboard.writeText(link);

    copiedBox.classList.add('show');

    setTimeout(() => {
      copiedBox.classList.remove('show');
    }, 1500);
  } catch (err) {
    console.error('Clipboard copy failed:', err);
  }
}

shareButtons.forEach(button =>
  button.addEventListener('click', copyText)
);

