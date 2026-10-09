// Checkout oficial informado pelo vendedor.
const CHECKOUT_URL = 'https://pay.kiwify.com.br/hAPmUQT';

document.getElementById('year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-checkout]').forEach((button) => {
  if (CHECKOUT_URL.trim() && /^https:\/\//i.test(CHECKOUT_URL)) {
    button.href = CHECKOUT_URL;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
  } else {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const warning = document.getElementById('checkout-warning');
      warning.hidden = false;
      warning.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
});
