const radioGroups = document.querySelectorAll('div[role="radiogroup"]');

radioGroups.forEach(group => {
  const radioButtons = group.querySelectorAll('input[type="radio"]');
  
  let highestPointsButton = null;

  radioButtons.forEach(button => {
    const label = button.nextElementSibling;
    if (label && label.textContent.includes('pt')) {
      const pointValue = parseInt(label.textContent.trim().replace('pt', '').trim());
      
      if (!highestPointsButton || pointValue > parseInt(highestPointsButton.nextElementSibling.textContent.trim().replace('pt', '').trim())) {
        highestPointsButton = button;
      }
    }
  });

  if (highestPointsButton) {
    highestPointsButton.click();
  }
});
