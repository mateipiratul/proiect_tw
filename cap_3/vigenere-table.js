function colorPlus(row, column, color) {
    const element = document.getElementById("vigenere-container");
    var coloana = element.getElementsByClassName("c" + column);
    var linie = element.getElementsByClassName("r" + row);
    for (let i = 0; i < coloana.length; i++) {
        coloana[i].style.backgroundColor = color;
        linie[i].style.backgroundColor = color;
    }
}

function vigenere(dimensiune) {
    const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const element = document.getElementById("vigenere-container");
    for (let i = 0; i < dimensiune; i++) {
        const linie = document.createElement("tr");
        for (let j = 0; j < dimensiune; j++) {
            const cell = document.createElement("td");
            cell.classList.add("r" + i);
            cell.classList.add("c" + j);
            if ((!i || !j) && i + j) cell.style.backgroundColor = "rgb(150, 150, 260)";
            if (j) cell.textContent += alfabet[(i + j - 1) % 26];
            else if (i) cell.textContent += alfabet[i - 1];
            if (!i && !j) cell.addEventListener("click", function () {
                colorPlus(i, j, "rgb(93, 90, 177)");
            });
            linie.appendChild(cell);
        }
        element.appendChild(linie);
    }
}

window.onload = function(){
    const dim = 27;
    vigenere(dim);
}