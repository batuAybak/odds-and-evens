let bankArr = []
let oddsArr = []
let evensArr = []

function sortOne() {
    if (bankArr.length === 0) return;

    const num = bankArr.shift();
    (num % 2 === 0) ? evensArr.unshift(num) : oddsArr.unshift(num);
    render();
}

function sortAll() {
    while (bankArr.length > 0) {
        sortOne();
    }
}

function addNumberForm() {
    const $formContainer = document.createElement('div');
    $formContainer.id = "formContainer";

    const $form = document.createElement('form');
    $form.innerHTML = `
        <label for="inputNum">Add a number to the bank</label>
        <input type="number" id="inputNum" min="1">
        <button type="submit" id="addNumber">Add Number</button>
        <button type="button" id="sortOne">Sort 1</button>
        <button type="button" id="sortAll">Sort All</button>
    `;

    // Add number to bank on submit
    $form.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = +$form.querySelector('#inputNum').value;
        if (!isNaN(value)) {
            bankArr.unshift(value);
            render();
        }
    });

    // Sort one number
    $form.querySelector('#sortOne').addEventListener('click', sortOne);

    // Sort all numbers
    $form.querySelector('#sortAll').addEventListener('click', sortAll);

    $formContainer.appendChild($form);
    return $formContainer;
}



function render() {
    const $app = document.querySelector("#app");
    $app.innerHTML = `
        <h1>Odds and Evens</h1>
        <div id="formContainer"></div>
        <main>
            <div class="bank">
                <h2>Bank</h2>
                <output id="bankOutput"></output>
            </div>
            <div class="odds">
                <h2>Odds</h2>
                <output id="oddsOutput"></output>
            </div>
            <div class="evens">
                <h2>Evens</h2>
                <output id="evensOutput"></output>
            </div>
        </main>
    `;
    document.getElementById('formContainer').replaceWith(addNumberForm());

    document.getElementById('bankOutput').textContent = bankArr.join(", ");
    document.getElementById('oddsOutput').textContent = oddsArr.join(", ");
    document.getElementById('evensOutput').textContent = evensArr.join(", ");
}

render()