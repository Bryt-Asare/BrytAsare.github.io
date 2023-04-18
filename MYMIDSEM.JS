// Add event listener to the "Learn More" button
const learnMoreButton = document.querySelector('button');
learnMoreButton.addEventListener('click', () => {
  alert('Welcome to Lexicon Kernel, your one-stop-dos-shop. We are located in Airport Ridge and specialize in the sales of dogs of all breeds, as well as booking security dogs for your protection. Our team is dedicated to helping you find the perfect furry companion to fit your lifestyle and needs. Additionally, we understand that convenience is key, which is why we offer delivery services to make the process as smooth as possible. If you have any questions or would like to learn more about our services, please contact us on 0594019295.!');
});

// Add event listener to the "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('#sales button');
buyNowButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase!');
  });
});

// Add event listener to the booking form
const bookingForm = document.querySelector('form');
bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const phoneInput = document.querySelector('#phone');
  const dogInput = document.querySelector('#dog');
  const paymentInput = document.querySelector('#payment');
  alert(`Thank you for your booking, ${nameInput.value}! You will receive a confirmation email at ${emailInput.value}.`);
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  dogInput.value = 'dog1';
  paymentInput.value = 'cash';
});
