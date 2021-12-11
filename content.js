console.log('RBW ZD Agent Helper is Active!');

const agentHelper = () => {
  console.log('RBW ZD Agent Helper is Running!');

  const createButtons = document.querySelectorAll('.organization-pill.create');
  const orgButtons = document.querySelectorAll('.organization-pill');

  createButtons.forEach((element) => {
    const topBar = element.closest('header');
    if (element.innerText.includes('(create)')) {
      topBar.style.backgroundColor = '#BD322C';
      element.style.backgroundColor = '#BD322C';
      element.style.color = '#FFFFFF';
      element.style.fontWeight = 'bold';
    } else {
      topBar.style.backgroundColor = '#F8F9F9';
      element.style.backgroundColor = '#F8F9F9';
      element.style.color = '#2F3941';
      element.style.fontWeight = 'normal';
    }
  });

  orgButtons.forEach((element) => {
    const topBar = element.closest('header');
    if (!element.innerText.includes('(create)')) {
      topBar.style.backgroundColor = '#F8F9F9';
      element.style.backgroundColor = '#F8F9F9';
      element.style.color = '#2F3941';
      element.style.fontWeight = 'normal';
    }
  });
}

const timedExecution = setInterval(agentHelper, 1000);