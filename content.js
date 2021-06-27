console.log('RBW Agent Helper is Active!');

function agentHelper() {
    console.log('RBW Agent Helper is Running!');
    const createButt = document.getElementsByClassName("ember-view btn organization-pill create");
    const orgButt = document.getElementsByClassName("ember-view btn organization-pill");

    for (const element of createButt) {
        if (element.innerText.includes('(create)') === true) {
            element.style['background-color'] = "#BD322C";
            element.style['color'] = '#FFFFFF';
            element.style['font-weight'] = 'bold';
        } else {
            element.style['background-color'] = "#F8F9F9";
            element.style['color'] = '#2F3941';
            element.style['font-weight'] = 'normal';
        }
    }

    for (const element of orgButt) {
        if (element.innerText.includes('(create)') === false) {
            element.style['background-color'] = "#F8F9F9";
            element.style['color'] = '#2F3941';
            element.style['font-weight'] = 'normal';
        }
    }
}

const timedExecution = setInterval(agentHelper, 1000);
