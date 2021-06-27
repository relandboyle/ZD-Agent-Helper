console.log('RBW ZD Agent Helper is Active!');

const agentHelper = () => {
    console.log('RBW ZD Agent Helper is Running!');
    const createButton = document.getElementsByClassName("ember-view btn organization-pill create");
    const orgButton = document.getElementsByClassName("ember-view btn organization-pill");

    for (const element of createButton) {
        if (element.innerText.includes('(create)')) {
            element.style['background-color'] = "#BD322C";
            element.style['color'] = '#FFFFFF';
            element.style['font-weight'] = 'bold';
        } else {
            element.style['background-color'] = "#F8F9F9";
            element.style['color'] = '#2F3941';
            element.style['font-weight'] = 'normal';
        }
    }

    for (const element of orgButton) {
        if (!element.innerText.includes('(create)')) {
            element.style['background-color'] = "#F8F9F9";
            element.style['color'] = '#2F3941';
            element.style['font-weight'] = 'normal';
        }
    }
}

const timedExecution = setInterval(agentHelper, 1000);