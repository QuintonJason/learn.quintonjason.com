const detailButtons = document.querySelectorAll('[data-toggle-details]');

detailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const details = button.parentElement?.querySelector('[data-details]');
    const isHidden = details?.hasAttribute('hidden');

    if (!details) return;

    details.toggleAttribute('hidden');
    button.textContent = isHidden ? 'Hide details' : 'Show details';
  });
});
