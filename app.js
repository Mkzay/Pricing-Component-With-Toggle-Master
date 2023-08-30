document.addEventListener('DOMContentLoaded', function () {
    const AnnualButton = document.getElementById('Annual-Button');
    const prices = {
      'Basic-Price': '&dollar;19.99',
      'Professional-Price': '&dollar;24.99',
      'Master-Price': '&dollar;39.99'
    };
    
    AnnualButton.addEventListener('click', function () {
      const icon = AnnualButton.querySelector('i');
      const priceElements = document.querySelectorAll('.p1-1');
    
      icon.classList.toggle('fa-toggle-on');
      icon.classList.toggle('fa-toggle-off');
    
      priceElements.forEach(priceElement => {
        const originalPrice = prices[priceElement.id];
        const currentPrice = priceElement.innerHTML;
    
        if (currentPrice === originalPrice) {
          priceElement.innerHTML = 'Annual price: ' + originalPrice;
        } else {
          priceElement.innerHTML = originalPrice;
        }
      });
    });
  });
  