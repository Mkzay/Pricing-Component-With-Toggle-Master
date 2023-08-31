// Get references to the checkbox and price elements
const checkbox = document.querySelector('input[type="checkbox"]');
const basicPrice = document.getElementById('Basic-Price');
const professionalPrice = document.getElementById('Professional-Price');
const masterPrice = document.getElementById('Master-Price');

// Define the original prices
const originalPrices = {
  basic: '$199.99',
  professional: '$249.99',
  master: '$399.99'
};

// Define the discounted prices
const discountedPrices = {
  basic: '$19.99',
  professional: '$24.99',
  master: '$39.99'
};

// Function to update prices based on checkbox status
function updatePrices() {
  if (checkbox.checked) {
    basicPrice.textContent = discountedPrices.basic;
    professionalPrice.textContent = discountedPrices.professional;
    masterPrice.textContent = discountedPrices.master;
  } else {
    basicPrice.textContent = originalPrices.basic;
    professionalPrice.textContent = originalPrices.professional;
    masterPrice.textContent = originalPrices.master;
  }
}

// Attach event listener to the checkbox
checkbox.addEventListener('change', updatePrices);

// Initial call to set prices based on checkbox status
updatePrices();
