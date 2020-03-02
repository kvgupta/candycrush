var rows = 6;
var cols = 6;
var grid = [];

const candies = ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10'];

const mytable = document.getElementById('myTable');

function renderingTable(r, c) {
    for (let i = 0; i < r; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < c; j++) {
            const td = document.createElement('td');
            // const Select Random Candies
            const randomIndex = Math.floor(Math.random() * candies.length);
            td.innerText = candies[randomIndex];
            td.setAttribute('data-value', candies[randomIndex]);
            td.setAttribute('data-id', i + ':' + j)
            tr.appendChild(td);
        }
        mytable.appendChild(tr);
    }
}

renderingTable(rows, cols);
