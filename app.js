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

const toggleButton = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');

function updateToggleEmoji() {
  if (document.body.classList.contains('dark-mode')) {
    toggleButton.textContent = '🌷';
  } else {
    toggleButton.textContent = '🌙';
  }
}

if (savedTheme === 'dark' || (prefersDark && !savedTheme)) {
  document.body.classList.add('dark-mode');
}

updateToggleEmoji();

toggleButton.title = 'toggle theme';

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDark = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateToggleEmoji();
});

const heading = document.querySelector('h1');
const originalText = heading.textContent;
const alias = 'aka foxian';

heading.addEventListener('mouseenter', () => {
  heading.style.opacity = '0';
  setTimeout(() => {
    heading.textContent = alias;
    heading.style.opacity = '1';
  }, 300);
});

heading.addEventListener('mouseleave', () => {
  heading.style.opacity = '0';
  setTimeout(() => {
    heading.textContent = originalText;
    heading.style.opacity = '1';
  }, 300);
});

let toastTimeout;
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
    clearTimeout(toastTimeout); // clear previous timeout
    toastTimeout = setTimeout(() => {
      copiedBox.classList.remove('show');
    }, 1500);
  } catch (err) {
    console.error('Clipboard copy failed:', err);
  }
}

