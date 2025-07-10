// coursera doi ID button nen fix lai

const radioGroups = document.querySelectorAll('div[role="radiogroup"]');

radioGroups.forEach(group => {
  const radioButtons = group.querySelectorAll('input[type="radio"]');
  
  let highestPointsButton = null;
  let highestPoints = -Infinity;

  radioButtons.forEach(button => {
    const labelTextElement = button.closest('label').querySelector('.css-1rlln5c span');
    if (labelTextElement && labelTextElement.textContent.includes('points')) {
      const pointValue = parseInt(labelTextElement.textContent.replace('points', '').trim(), 10);
      
      if (pointValue > highestPoints) {
        highestPoints = pointValue;
        highestPointsButton = button;
      }
    }
  });

  if (highestPointsButton) {
    highestPointsButton.click();
  }
});

// keo den div cuoi cung
const targetDiv = document.querySelector('.cds-1.css-kqrlrs.cds-2.cds-3.cds-grid-item.cds-5.cds-8');
if (targetDiv) {
  targetDiv.scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// click nut Submit Review sau 1s
setTimeout(() => {
  const submitButton = document.querySelector('button.cds-131.cds-button-disableElevation.cds-button-primary.css-1drt86s');
  if (submitButton && submitButton.getAttribute('aria-disabled') !== 'true') {
    submitButton.click();
  }
}, 1000); // đợi 1 giây để radio buttons xử lý xong
