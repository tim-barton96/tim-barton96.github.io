function addToList() {
    let list = document.getElementById('suggestionList');

    if (!list) {
        list = document.createElement('section');
        list.setAttribute('id', 'suggestionList')
        const header = document.createElement('h2');
        header.append('List of Things I will never learn, ever');
        list.appendChild(header);

        const unorderedList = document.createElement('ul');
        unorderedList.setAttribute('id', 'ignoreList');
        list.appendChild(unorderedList);
        document.getElementById('lists').appendChild(list);
    }

    const listValueToAdd = document.getElementById('itemToAdd').value;

    const listItemToAdd = document.createElement('li');
    listItemToAdd.append(listValueToAdd);
    document.getElementById('ignoreList').append(listItemToAdd);
}

function updateResult(result) {
    document.getElementById('result').remove();
    const resultElement = document.createElement('h3')
    resultElement.setAttribute('id', 'result');
    resultElement.append('Result: ' + result);
    document.getElementById('calculator').append(resultElement);
}

function add() {
    const number1 = Number(document.getElementById('number1').value);
    const number2 = Number(document.getElementById('number2').value);
    const result = number1 + number2;
    updateResult(result);
}

function subtract() {
    const number1 = Number(document.getElementById('number1').value);
    const number2 = Number(document.getElementById('number2').value);
    const result = number1 - number2;
    updateResult(result);
}

function insult() {
    updateResult('Hahahahha you nerd!!! You know what calculus is!! I sure don\'t, and I\'m proud!!!');
}

document.addEventListener('DOMContentLoaded', (event) => {
    const rudeButton = document.getElementById('addToSuggestions');
    rudeButton.addEventListener('click', addToList);

    const addButton = document.getElementById('add');
    addButton.addEventListener('click', add);

    const subtractButton = document.getElementById('subtract');
    subtractButton.addEventListener('click', subtract);

    const insultButton = document.getElementById('insult');
    insultButton.addEventListener('click', insult);
});