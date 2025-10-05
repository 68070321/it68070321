
let outputUI = document.getElementById("historyUI");

let bankcash = document.getElementById("currentaccount");
let mycash = document.getElementById("currentcash");

function Depo_Or_With() {
    let dowinput = document.getElementById("bankoperatorcash");
    let dowval = dowinput.value;
    let selected = document.getElementById("bankoperator").value;

    let bankcash = document.getElementById("currentaccount");
    let mycash = document.getElementById("currentcash");

    if (selected === "Deposit") {
    if (Number(mycash.value) >= Number(dowval) && Number(dowval) > 0) {
        mycash.value = Number(mycash.value) - Number(dowval);
        bankcash.value = Number(bankcash.value) + Number(dowval);

        outputUI.textContent = "Bank balance " + bankcash.value + ", " + "My Balance " + mycash.value;
    } else {
        outputUI.textContent = "Bank balance " + bankcash.value + ", " + "My Balance " + mycash.value + " (Error! number not changed)";
    }
} else if (selected === "Withdraw") {
    if (Number(bankcash.value) >= Number(dowval) && Number(dowval) > 0) {
        mycash.value = Number(mycash.value) + Number(dowval);
        bankcash.value = Number(bankcash.value) - Number(dowval);

        outputUI.textContent = "Bank balance " + bankcash.value + ", " + "My Balance " + mycash.value;
    } else {
        outputUI.textContent = "Bank balance " + bankcash.value + ", " + "My Balance " + mycash.value + " (Error! number not changed)";
    }
}
}

function ChangeMoney() {
    let bankcash = document.getElementById("currentaccount");
    let mycash = document.getElementById("currentcash");

    if (Number(bankcash.value) >= 0 && Number(mycash.value) >= 0) {
    outputUI.textContent = "Bank balance " + bankcash.value + ", " + "My Balance " + mycash.value;
    }
}
